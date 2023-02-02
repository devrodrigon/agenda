import prisma from '../../database';
import ErrorHttp from '../../errors/errorHttp';
import { ContactRequest } from '../../interfaces/contacts';

const createContactService = async ({ name, email, phone, customerId }: ContactRequest) => {
  const costumer = await prisma.customer.findUnique({
    where: {
      id: customerId,
    },
  });

  if (!costumer) {
    throw new ErrorHttp('Costumer not found!', 404);
  }

  const contact = await prisma.contact.create({
    data: {
      name,
      email,
      phone,
      customer: {
        connect: {
          id: costumer.id,
        },
      },
    },
    include: {
      customer: true,
    },
  });

  return contact;
};

export default createContactService;
