import * as yup from 'yup';

export const schemaRegistration = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email incorreto'),
  password: yup.string().required('Senha obrigatório'),
  passwordConfirmation: yup
    .string()
    .required('Confirmação de senha obrigatória')
    .oneOf([yup.ref('password')], 'Senha não correspondem'),
  phone: yup.string().required('Contato obrigatório'),
});
