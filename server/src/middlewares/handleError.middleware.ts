import { NextFunction, Request, Response } from 'express';
import ErrorHttp from '../errors/errorHttp';

const handleErrorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ErrorHttp) {
    return res.status(error.status).json({
      message: error.message,
    });
  }

  console.error(error);

  return res.status(500).json({
    message: 'Internal server error!',
  });
};

export default handleErrorMiddleware;
