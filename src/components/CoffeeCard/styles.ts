import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme.card};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  line-height: 130%;

  padding: 0 1.25rem 1.25rem;

  img {
    margin-top: -1.25rem;
  }

  > h4 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
  }

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.label};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    background: ${(props) => props.theme["yellow-700"]};
    color: ${(props) => props.theme["yellow-300"]};
    border-radius: 100px;
    padding: 0 8px;

    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.625rem;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 1.5rem;

  > span {
    font-size: 0.875rem;

    strong {
      font-family: "Baloo 2", sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  > div {
    display: flex;
  }
`;

export const ShoppingCartButton = styled.button`
  background: ${(props) => props.theme["purple-300"]};
  color: ${(props) => props.theme.card};
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme["purple-500"]};
  }
`;
