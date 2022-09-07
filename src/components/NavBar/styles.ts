import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
`;

const CurrentCity = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 6px;

  font-size: 0.875rem;

  svg {
    font-size: 1.25rem;
  }
`;

export const CurrentCityFound = styled(CurrentCity)`
  background: ${(props) => props.theme["purple-700"]};
  color: ${(props) => props.theme["purple-300"]};

  svg {
    color: ${(props) => props.theme["purple-500"]};
  }
`;

export const CurrentCityNotFound = styled(CurrentCity)`
  background: ${(props) => props.theme["red-700"]};
  color: ${(props) => props.theme["red-300"]};

  svg {
    color: ${(props) => props.theme["red-500"]};
  }
`;

export const ShoppingCartButtonNavBar = styled(NavLink)`
  background: ${(props) => props.theme["yellow-700"]};
  color: ${(props) => props.theme["yellow-300"]};
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme["yellow-500"]};
  }

  span {
    position: absolute;
    top: -25%;
    right: -25%;

    min-width: 1.25rem;
    min-height: 1.25rem;

    background: ${(props) => props.theme["yellow-300"]};
    border-radius: 50%;

    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    text-align: center;
  }
`;
