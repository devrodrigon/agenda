import prisma from '../../database';

const listContactsServices = async () => {
  const contacts = await prisma.contact.findMany();

  return contacts;
};

export default listContactsServices;
