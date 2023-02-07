import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  width: 17.5rem;

  border: 1px #eaeaea solid;
  border-radius: 0.75rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.375rem;

    button {
      cursor: pointer;
      font-size: 1rem;
    }
  }
`;
