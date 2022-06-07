import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--cardWhite);
  border-radius: 20px;
  color: var(--darkBrown);
  display: flex;
  flex-direction: column;
  gap: 3.25rem;
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

  h1 {
    @media (max-width: 640px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: var(--brown);
  }

  footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: relative;

    &::before {
      border-top: 2px solid var(--cream);
      border-radius: 1px;
      content: '';
      position: absolute;
      padding-bottom: 7.25rem;
      width: 100%;
    }

    section {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;

      h2 {
        font-size: 3rem;
        @media (max-width: 640px) {
          font-size: 1.875rem;
        }
      }

      &:nth-child(2) {
        align-items: flex-end;
      }
    }
  }
`;
