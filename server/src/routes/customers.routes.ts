import { Router } from 'express';
import createCustomersController from '../controllers/customers/createCustomers.controller';
import deleteCustomerController from '../controllers/customers/deleteCustomer.controller';
import listCustomersController from '../controllers/customers/listCustomers.controller';
import retrieveCustomerController from '../controllers/customers/retrieveCustomer.controller';
import updateCustomerController from '../controllers/customers/updateCustomer.controller';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware';
import verifyOwnerAccountMiddleware from '../middlewares/verifyOwnerAccount.middleware';

const routes = Router();

const customersRoutes = () => {
  routes.post('/', createCustomersController);
  routes.patch(
    '/:customerId',
    verifyAuthTokenMiddleware,
    verifyOwnerAccountMiddleware,
    updateCustomerController
  );
  routes.delete(
    '/:customerId',
    verifyAuthTokenMiddleware,
    verifyOwnerAccountMiddleware,
    deleteCustomerController
  );
  routes.get('/', verifyAuthTokenMiddleware, listCustomersController);
  routes.get('/:customerId', verifyAuthTokenMiddleware, retrieveCustomerController);

  return routes;
};

export default customersRoutes;
