import prisma from '../../database';

const retrieveCustomerService = async (customerId: string) => {
  const customer = await prisma.customer.findUnique({
    where: {
      id: customerId,
    },
  });

  return customer;
};

export default retrieveCustomerService;
