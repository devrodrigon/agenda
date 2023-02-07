import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.white};
  padding: 0 2.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5625rem;

    max-width: 23.125rem;
  }
`;
