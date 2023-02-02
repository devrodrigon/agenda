import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../database';
import ErrorHttp from '../../errors/errorHttp';
import { ILogin } from '../../interfaces/sessions';

const loginService = async ({ email, password }: ILogin) => {
  const account = await prisma.customer.findFirst({
    where: {
      email,
    },
  });

  if (!account) {
    throw new ErrorHttp('Wrong email/password', 403);
  }

  const passwordMatch = bcrypt.compareSync(password, account.password);

  if (!passwordMatch) {
    throw new ErrorHttp('Wrong email/password', 403);
  }

  const token = jwt.sign({ id: account.id }, process.env.SECRET_KEY as string, {
    expiresIn: '15m',
  });

  return token;
};

export default loginService;
