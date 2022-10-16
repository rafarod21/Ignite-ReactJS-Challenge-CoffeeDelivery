import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  form {
    padding: 0 10rem;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    column-gap: 2rem;
    margin-top: 2.5rem;

    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 130%;
      margin-bottom: 1rem;
    }

    @media (max-width: 1200px) {
      padding: 0 2rem 2rem;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;

const DefaultLabel = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    font-size: 1.375rem;
  }

  div {
    display: flex;
    flex-direction: column;

    span:first-child {
      color: ${(props) => props.theme.subtitle};
    }
  }
`;

export const Address = styled.section`
  height: 372px;
  border-radius: 6px;
  background: ${(props) => props.theme.card};
  margin-bottom: 0.75rem;
  padding: 2.5rem;

  display: grid;
  grid-template-columns: auto auto 3.75rem;
  grid-template-areas:
    'label label label'
    'cep . .'
    'street street street'
    'number complement complement'
    'district city uf';
  row-gap: 1rem;
  column-gap: 0.75rem;

  @media (max-width: 800px) {
    height: auto;
    grid-template-columns: auto auto;
    grid-template-areas:
      'label label'
      'cep .'
      'street street'
      'number complement'
      'district district'
      'city uf';
  }

  @media (max-width: 800px) {
    grid-template-columns: auto;
    grid-template-areas:
      'label'
      'cep'
      'street'
      'number'
      'complement'
      'district'
      'city'
      'uf';
  }

  input {
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.button};
    background: ${(props) => props.theme.input};
    color: ${(props) => props.theme.text};

    font-size: 0.875rem;

    &::placeholder {
      color: ${(props) => props.theme.label};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-300']};
    }
  }

  input:nth-child(2) {
    grid-area: cep;
  }

  input:nth-child(3) {
    grid-area: street;
  }

  input:nth-child(4) {
    grid-area: number;
  }

  div:nth-child(5) {
    grid-area: complement;
    position: relative;

    input {
      width: 100%;
    }

    &::after {
      content: attr(data-after);
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;

      font-size: 0.75rem;
      font-style: italic;
      color: ${(props) => props.theme.label};
    }
  }

  input:nth-child(6) {
    grid-area: district;
  }

  input:nth-child(7) {
    grid-area: city;
  }

  input:nth-child(8) {
    grid-area: uf;
  }
`;

export const LabelAddress = styled(DefaultLabel)`
  grid-area: label;

  svg {
    color: ${(props) => props.theme['yellow-300']};
  }
`;

export const Payment = styled.section`
  border-radius: 6px;
  background: ${(props) => props.theme.card};
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
`;

export const LabelPayment = styled(DefaultLabel)`
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`;

export const OptionsPayments = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.75rem;
  margin-top: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonOptionsPayments = styled.button<{ isSelected?: boolean }>`
  border: 1px solid
    ${(props) =>
      props.isSelected ? props.theme['purple-500'] : props.theme.card};
  background: ${(props) =>
    props.isSelected ? props.theme['purple-700'] : props.theme.button};
  border-radius: 6px;
  padding: 1rem;
  gap: 0.75rem;

  font-size: 0.75rem;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  transition: all 0.2s;

  &:hover {
    color: ${(props) => !props.isSelected && props.theme.subtitle};
    background: ${(props) => !props.isSelected && props.theme.hover};
  }

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme['purple-500']};
  }
`;

export const SelctedCoffees = styled.section`
  width: 100%;
  height: 500px;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.card};
  padding: 2.5rem;

  > button:last-child {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;

    width: 368px;
    height: 46px;

    background: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};
    border-radius: 6px;

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme['yellow-300']};
    }
  }
`;

export const ListCoffees = styled.div`
  > hr {
    margin: 2rem 0;
    border: 1px solid ${(props) => props.theme.button};
  }
`;

export const SectionValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    span:first-child {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1.25rem;
    }
  }
`;
