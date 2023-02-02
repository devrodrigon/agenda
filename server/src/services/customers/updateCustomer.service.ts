import prisma from '../../database';
import { IUpdateRequest } from '../../interfaces/custumers';

const updateCustomerService = async (data: IUpdateRequest, customerId: string) => {
  const customer = await prisma.customer.update({
    data: data,
    where: {
      id: customerId,
    },
  });

  return customer;
};

export default updateCustomerService;
