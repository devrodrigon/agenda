import prisma from '../../database';

const deleteCustomerService = async (customerId: string) => {
  await prisma.customer.delete({
    where: {
      id: customerId,
    },
  });

  return;
};

export default deleteCustomerService;
