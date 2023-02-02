import { Router } from 'express';
import createContactController from '../controllers/contacts/createContact.controller';
import deleteContactController from '../controllers/contacts/deleteContact.controller';
import listContactsController from '../controllers/contacts/listContacts.controller';
import retrieveContactController from '../controllers/contacts/retriveContact.controller';
import updateContactController from '../controllers/contacts/updateContact.controller';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware';
import verifyOwnerResourceMiddleware from '../middlewares/verifyOwnerResource.middleware';

const routes = Router();

const contactsRoutes = () => {
  routes.post('/', verifyAuthTokenMiddleware, createContactController);
  routes.patch(
    '/:contactId',
    verifyAuthTokenMiddleware,
    verifyOwnerResourceMiddleware,
    updateContactController
  );
  routes.delete(
    '/:contactId',
    verifyAuthTokenMiddleware,
    verifyOwnerResourceMiddleware,
    deleteContactController
  );
  routes.get('/', verifyAuthTokenMiddleware, listContactsController);
  routes.get(
    '/:contactId',
    verifyAuthTokenMiddleware,
    verifyOwnerResourceMiddleware,
    retrieveContactController
  );

  return routes;
};

export default contactsRoutes;
