import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
`;

interface ChartBarContainerProps {
  isToday: boolean;
  barHeight: number;
}

export const ChartBarContainer = styled.div<ChartBarContainerProps>`
  color: var(--brown);
  height: ${(props) => props.barHeight + '%'};
  max-height: 9.5rem;
  position: relative;
  text-align: center;

  &:hover span {
    visibility: visible;
  }

  span {
    background-color: var(--darkBrown);
    border-radius: 5px;
    bottom: 105%;
    color: var(--white);
    font-weight: 700;
    left: 50%;
    margin-left: -37.5px;
    padding: 0.5rem 0;
    position: absolute;
    text-align: center;
    transition: 0.2s;
    visibility: hidden;
    width: 150%;
    z-index: 1;

    @media (max-width: 640px) {
      margin-left: -24px;
      font-size: 0.75rem;
    }
  }

  div {
    background-color: ${(props) =>
      props.isToday ? 'var(--cyan)' : 'var(--red)'};
    border-radius: 5px;
    height: 100%;
    position: relative;
    transition: 0.2s;
    width: 3.125rem;

    @media (max-width: 1280px) {
      width: 3rem;
    }

    @media (max-width: 640px) {
      width: 2rem;
    }

    &:hover {
      cursor: pointer;
      background-color: ${(props) =>
        props.isToday ? 'var(--lightCyan)' : 'var(--lightRed)'};
    }
  }
  p {
    margin-top: 0.5rem;
  }
`;
