import styled from 'styled-components';

export const SuccessContainer = styled.div`
  margin: 0 10rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10rem;

  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  > img {
    width: 40rem;
  }

  > div {
    > h1 {
      margin-top: 80px;

      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
      color: ${(props) => props.theme['yellow-300']};
    }

    > span {
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme.subtitle};
    }
  }
`;

export const InformationsBlock = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem;
  gap: 2rem;

  width: 33rem;

  position: relative;
  border-radius: 6px 36px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  z-index: 1;

  &::before {
    content: '';
    display: block;
    height: calc(100% - calc(1px * 2));
    width: calc(100% - calc(1px * 2));

    background: ${(props) => props.theme.background};

    position: absolute;

    top: 1px;
    left: 1px;
    border-radius: 6px 36px;
    border-radius: calc(6px - 1px) calc(36px - 1px);
    z-index: -1;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 1000px;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.background};
  }
`;

export const Item1 = styled(Item)`
  div {
    background: ${(props) => props.theme['purple-500']};
  }
`;

export const Item2 = styled(Item)`
  div {
    background: ${(props) => props.theme['yellow-500']};
  }
`;

export const Item3 = styled(Item)`
  div {
    background: ${(props) => props.theme['yellow-300']};
  }
`;
