import { Request, Response } from 'express';
import createCustomersService from '../../services/customers/createCustomers.service';

const createCustomersController = async (request: Request, response: Response) => {
  const { name, email, phone, password } = request.body;

  const customers = await createCustomersService({ name, email, phone, password });

  return response.status(201).json(customers);
};

export default createCustomersController;
