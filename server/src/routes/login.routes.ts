import { Router } from 'express';

import loginController from '../controllers/sessions/login.controller';

const route = Router();

export const loginRoutes = () => {
  route.post('/', loginController);

  return route;
};
