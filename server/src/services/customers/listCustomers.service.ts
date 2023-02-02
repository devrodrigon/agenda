import prisma from '../../database';

const listCustomersService = async () => {
  const customers = await prisma.customer.findMany();

  return customers;
};

export default listCustomersService;
