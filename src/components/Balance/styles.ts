import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: var(--red);
  border-radius: 20px;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  position: relative;
  width: 24.5%;

  @media (max-width: 1920px) {
    width: 37.5%;
  }

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
      font-size: 1.125rem;
      font-weight: 400;
    }

    span {
      font-size: 2rem;
      @media (max-width: 640px) {
        font-size: 1.5rem;
      }
      font-weight: 700;
    }
  }
`;
