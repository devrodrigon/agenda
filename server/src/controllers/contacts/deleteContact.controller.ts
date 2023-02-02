import { Request, Response } from 'express';
import deleteContactService from '../../services/contacts/deleteContact.service';

const deleteContactController = async (request: Request, response: Response) => {
  const { contactId } = request.params;

  await deleteContactService(contactId);

  return response.status(204).json();
};

export default deleteContactController;
