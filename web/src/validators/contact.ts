import * as yup from 'yup';

export const schemaContact = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email incorreto'),
  phone: yup.string().required('Contato obrigatório'),
});
