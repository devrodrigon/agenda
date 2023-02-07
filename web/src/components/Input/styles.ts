import styled from 'styled-components';

export const InputField = styled.input`
  background-color: ${({ theme }) => theme.gray};
  padding: 0.625rem 1.3125rem;
  border: none;
  border-radius: 0.9375rem;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.75rem;
`;
