import { Request, Response } from 'express';
import prisma from '../../database';

const retrieveContactService = async (contactId: string) => {
  const contact = await prisma.contact.findUnique({
    where: {
      id: contactId,
    },
  });

  return contact;
};

export default retrieveContactService;
