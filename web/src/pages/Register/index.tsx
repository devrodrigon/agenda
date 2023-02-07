import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/Input';
import { AuthContext, ISignUpForm } from '../../providers/auth';
import { Button } from '../../styles/button';
import { ContainerRegister } from './styles';
import { schemaRegistration } from '../../validators/registration';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(schemaRegistration),
  });
  const { signUp } = useContext(AuthContext);

  return (
    <ContainerRegister>
      <form onSubmit={handleSubmit(signUp)}>
        <Input<ISignUpForm>
          placeholder="nome"
          nameField="name"
          register={register}
          errors={errors}
        />
        <Input<ISignUpForm>
          placeholder="email"
          nameField="email"
          register={register}
          errors={errors}
        />
        <Input<ISignUpForm>
          placeholder="senha"
          type="password"
          nameField="password"
          register={register}
          errors={errors}
        />
        <Input<ISignUpForm>
          placeholder="confirmar senha"
          type="password"
          nameField="confirm_password"
          register={register}
          errors={errors}
        />
        <Input<ISignUpForm>
          placeholder="fone"
          nameField="phone"
          register={register}
          errors={errors}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </ContainerRegister>
  );
};

export default Register;
