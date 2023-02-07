import { ErrorMessage, InputField } from './styles';

import {
  DeepMap,
  FieldError,
  UseFormRegister,
  Path,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

import { InputHTMLAttributes } from 'react';

interface InputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  nameField: Path<T>;
  rules?: RegisterOptions;
  register: UseFormRegister<T>;
  errors: Partial<DeepMap<T, FieldError>>;
}

const Input = <T extends Record<string, any>>({
  nameField,
  register,
  errors,
  rules = {},
  ...rest
}: InputProps<T>) => {
  return (
    <>
      <InputField {...register(nameField, rules)} {...rest} />
      {errors[nameField] && <ErrorMessage>{errors[nameField].message}</ErrorMessage>}
    </>
  );
};

export default Input;
