import { CustomerRequest } from '../../interfaces/custumers';
import prisma from '../../database';
import bcrypt from 'bcrypt';

const createCustomersService = async ({ name, email, password, phone }: CustomerRequest) => {
  const passwordHash = bcrypt.hashSync(password, 10);

  const customer = await prisma.customer.create({
    data: {
      name,
      email,
      password: passwordHash,
      phone,
    },
  });

  return customer;
};

export default createCustomersService;
