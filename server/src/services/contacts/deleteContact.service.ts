import prisma from '../../database';

const deleteContactService = async (contactId: string) => {
  await prisma.contact.delete({
    where: {
      id: contactId,
    },
  });

  return;
};

export default deleteContactService;
