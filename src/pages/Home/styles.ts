import styled from 'styled-components';

import backgroundImg from '../../assets/background.svg';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PresentationContainer = styled.header`
  height: 34rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.75rem 10rem;
  gap: 3.5rem;
  background-image: url(${backgroundImg});

  @media (max-width: 1200px) {
    img {
      width: 20rem;
    }
  }

  @media (max-width: 850px) {
    height: auto;
    padding: 4rem 2rem;
    flex-direction: column-reverse;
  }
`;

export const PresentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: ${(props) => props.theme.title};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    @media (max-width: 1200px) {
      font-size: 2rem;
    }
  }

  > span {
    color: ${(props) => props.theme.subtitle};
    font-size: 1.25rem;
    line-height: 130%;

    margin-top: 1rem;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 850px) {
    align-items: center;
    text-align: center;
  }
`;

export const GirdItems = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.25rem 2.5rem;

  @media (max-width: 1200px) {
    font-size: 0.75rem;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
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

    @media (max-width: 1200px) {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`;

export const Item1 = styled(Item)`
  div {
    background: ${(props) => props.theme['yellow-300']};
  }
`;

export const Item2 = styled(Item)`
  div {
    background: ${(props) => props.theme.text};
  }
`;

export const Item3 = styled(Item)`
  div {
    background: ${(props) => props.theme['yellow-500']};
  }
`;

export const Item4 = styled(Item)`
  div {
    background: ${(props) => props.theme['purple-500']};
  }
`;

export const CoffeesContainer = styled.main`
  padding: 2rem 10rem;

  header {
    display: flex;
    justify-content: space-between;

    @media (max-width: 850px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  > h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme.subtitle};
  }

  @media (max-width: 850px) {
    padding: 2rem;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ButtonTag = styled.button<{ isActive: boolean }>`
  border-radius: 100px;
  padding: 0 0.5rem;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;

  background: ${(props) =>
    props.isActive ? (props) => props.theme['yellow-300'] : 'inherit'};
  color: ${(props) =>
    props.isActive
      ? (props) => props.theme['yellow-700']
      : (props) => props.theme['yellow-300']};
  border: 1px solid ${(props) => props.theme['yellow-500']};
`;

export const CoffeesWrapeer = styled.div`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 2rem;

  @media (max-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
