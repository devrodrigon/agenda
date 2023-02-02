import { Request, Response, NextFunction } from 'express';

const verifyOwnerAccountMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.user;
  const { customerId } = request.params;

  if (customerId !== id) {
    return response.status(403).json({
      message: 'Not Authorized!',
    });
  }

  next();
};

export default verifyOwnerAccountMiddleware;
