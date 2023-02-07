import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import { AuthContext, IFormLogin } from '../../providers/auth';
import { Button } from '../../styles/button';
import { Container } from './styles';
import { schemaAuthentication } from '../../validators/authentication';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schemaAuthentication),
  });
  const { login } = useContext(AuthContext);

  return (
    <Container>
      <form onSubmit={handleSubmit(login)}>
        <Input<IFormLogin>
          placeholder="email"
          nameField="email"
          register={register}
          errors={errors}
        />
        <Input<IFormLogin>
          placeholder="senha"
          nameField="password"
          type="password"
          register={register}
          errors={errors}
        />
        <Button type="submit">Acessar</Button>
        <span>
          Não tem conta. <Link to="/register">Clique aqui para criar uma.</Link>
        </span>
      </form>
    </Container>
  );
};

export default Login;
