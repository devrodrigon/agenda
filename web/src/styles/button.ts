import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 0.9375rem;
  padding: 1rem;
  color: ${({ theme }) => theme.white};
  font-weight: bold;

  background-color: ${({ theme }) => theme.blue};

  cursor: pointer;
`;
