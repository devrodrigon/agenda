import { Request, Response } from 'express';
import listContactsServices from '../../services/contacts/listContacts.service';

const listContactsController = async (request: Request, response: Response) => {
  const contacts = await listContactsServices();

  return response.status(200).json(contacts);
};

export default listContactsController;
