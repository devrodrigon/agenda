import { Request, Response } from 'express';
import updateCustomerService from '../../services/customers/updateCustomer.service';

const updateCustomerController = async (request: Request, response: Response) => {
  const { customerId } = request.params;
  const data = request.body;

  const customer = await updateCustomerService(data, customerId);

  return response.status(200).json(customer);
};

export default updateCustomerController;
