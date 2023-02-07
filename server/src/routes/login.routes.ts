import { Router } from 'express';

import loginController from '../controllers/sessions/login.controller';
import profileController from '../controllers/sessions/profile.controller';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware';

const route = Router();

export const loginRoutes = () => {
  route.post('/login', loginController);
  route.get('/profile', verifyAuthTokenMiddleware, profileController);

  return route;
};
