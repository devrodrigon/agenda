import prisma from '../../database';
import { IUpdateRequest } from '../../interfaces/contacts';

const updateContactService = async (data: IUpdateRequest, contactId: string) => {
  const contact = await prisma.contact.update({
    data: data,
    where: {
      id: contactId,
    },
  });

  return contact;
};

export default updateContactService;
