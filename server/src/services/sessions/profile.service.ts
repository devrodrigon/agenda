import prisma from '../../database';

const profileService = async (id: string) => {
  const profile = await prisma.customer.findUnique({
    where: {
      id,
    },
    include: {
      contacts: true,
    },
  });

  const { password, ...rest } = profile!;

  return rest;
};

export default profileService;
