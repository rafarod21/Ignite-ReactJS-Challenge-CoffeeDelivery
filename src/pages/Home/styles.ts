import styled from "styled-components";

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
`;

export const PresentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: ${(props) => props.theme.title};
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
  }

  > span {
    color: ${(props) => props.theme.subtitle};
    font-size: 1.25rem;
    line-height: 130%;

    margin-top: 1rem;
  }
`;

export const GirdItems = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.25rem 2.5rem;
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
    background: ${(props) => props.theme["yellow-300"]};
  }
`;

export const Item2 = styled(Item)`
  div {
    background: ${(props) => props.theme.text};
  }
`;

export const Item3 = styled(Item)`
  div {
    background: ${(props) => props.theme["yellow-500"]};
  }
`;

export const Item4 = styled(Item)`
  div {
    background: ${(props) => props.theme["purple-500"]};
  }
`;

export const CoffeesContainer = styled.main`
  padding: 2rem 10rem;

  header {
    display: flex;
    justify-content: space-between;
  }

  > h2 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme.subtitle};
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
    props.isActive ? (props) => props.theme["yellow-300"] : "inherit"};
  color: ${(props) =>
    props.isActive
      ? (props) => props.theme["yellow-700"]
      : (props) => props.theme["yellow-300"]};
  border: 1px solid ${(props) => props.theme["yellow-500"]};
`;

export const CoffeesWrapeer = styled.div`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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