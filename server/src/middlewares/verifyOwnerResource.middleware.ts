import { Request, Response, NextFunction } from 'express';
import prisma from '../database';

const verifyOwnerResourceMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.user;
  const { contactId } = request.params;

  const contactExist = await prisma.contact.findUnique({
    where: {
      id: contactId,
    },
  });
  console.log(id);
  console.log(contactExist?.customerId !== id);

  if (!contactExist) {
    return response.status(404).json({
      message: 'Contact not found!',
    });
  }

  if (contactExist.customerId !== id) {
    return response.status(403).json({
      message: 'Not Authorized!!',
    });
  }

  next();
};

export default verifyOwnerResourceMiddleware;
