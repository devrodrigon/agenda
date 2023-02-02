import { Request, Response } from 'express';
import deleteCustomerService from '../../services/customers/deleteCustomer.service';

const deleteCustomerController = async (request: Request, response: Response) => {
  const { customerId } = request.params;

  await deleteCustomerService(customerId);

  return response.status(204).json();
};

export default deleteCustomerController;
