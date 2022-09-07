import styled from "styled-components";

export const CoffeesAmountInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.5rem;
  background: ${(props) => props.theme.button};
  color: ${(props) => props.theme.title};
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;

  margin-right: 0.5rem;

  button {
    border: 0;
    background: none;
    color: ${(props) => props.theme["purple-500"]};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.875;

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme["purple-300"]};
    }
  }

  > span {
    min-width: 1.25rem;
    text-align: center;
  }
`;
