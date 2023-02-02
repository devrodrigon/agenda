import { Request, Response } from 'express';
import retrieveContactService from '../../services/contacts/retrieveContact.service';

const retrieveContactController = async (request: Request, response: Response) => {
  const { contactId } = request.params;

  const contact = await retrieveContactService(contactId);

  return response.status(200).json(contact);
};

export default retrieveContactController;
