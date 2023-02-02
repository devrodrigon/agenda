import { Request, Response } from 'express';
import createContactService from '../../services/contacts/createContact.service';

const createContactController = async (request: Request, response: Response) => {
  const { name, email, phone } = request.body;
  const { id: customerId } = request.user;

  const contact = await createContactService({ name, email, phone, customerId });

  return response.status(201).json(contact);
};

export default createContactController;
