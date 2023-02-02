import { Request, Response } from 'express';
import listCustomersService from '../../services/customers/listCustomers.service';

const listCustomersController = async (request: Request, response: Response) => {
  const customers = await listCustomersService();

  return response.status(200).json(customers);
};

export default listCustomersController;
