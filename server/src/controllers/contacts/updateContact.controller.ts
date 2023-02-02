import { Request, Response } from 'express';
import updateContactService from '../../services/contacts/updateContact.service';

const updateContactController = async (request: Request, response: Response) => {
  const data = request.body;
  const { contactId } = request.params;

  const contact = await updateContactService(data, contactId);

  return response.status(200).json(contact);
};

export default updateContactController;
