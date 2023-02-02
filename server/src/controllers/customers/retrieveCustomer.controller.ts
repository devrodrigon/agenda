import { Request, Response } from 'express';
import retrieveCustomerService from '../../services/customers/retrieveCustomer.service';

const retrieveCustomerController = async (request: Request, response: Response) => {
  const { customerId } = request.params;

  const customer = await retrieveCustomerService(customerId);

  return response.status(200).json(customer);
};

export default retrieveCustomerController;
