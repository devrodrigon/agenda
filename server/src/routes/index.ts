import { Express } from 'express';
import contactsRoutes from './contacts.routes';
import customersRoutes from './customers.routes';
import { loginRoutes } from './login.routes';

const appRoutes = (app: Express) => {
  app.use('/customers', customersRoutes());
  app.use('/contacts', contactsRoutes());
  app.use('/login', loginRoutes());
};

export default appRoutes;
