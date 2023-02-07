import styled from 'styled-components';

export const Container = styled.div`
  header {
    .header-inner {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      max-width: 75rem;
    }
  }

  .contacts {
    margin: 0.75rem auto;
    max-width: 75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
