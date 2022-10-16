import styled from 'styled-components';

export const CoffeeCardCheckoutContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    height: 4rem;
    width: 4rem;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > div:first-child {
      display: flex;
      justify-content: space-between;

      span {
        color: ${(props) => props.theme.subtitle};
      }
    }

    > div:last-child {
      display: flex;
      gap: 0.5rem;

      > button:last-child {
        border: 1px solid ${(props) => props.theme.card};
        background: ${(props) => props.theme.button};
        border-radius: 6px;
        padding: 0.5rem;
        gap: 0.25rem;

        font-size: 0.75rem;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: all 0.2s;

        &:hover {
          color: ${(props) => props.theme.subtitle};
          background: ${(props) => props.theme.hover};
        }

        svg {
          font-size: 1rem;
          color: ${(props) => props.theme['purple-500']};
        }
      }
    }
  }
`;
