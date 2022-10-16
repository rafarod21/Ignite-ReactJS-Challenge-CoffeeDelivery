import { useState } from 'react';
import { Minus, Plus } from 'phosphor-react';

import { CoffeesAmountInputContainer } from './styles';

const MAX_COFFEES = 50;

interface CoffeesAmountInputProps {
  amount: number;
  incrementAmountCoffees: () => void;
  decrementAmountCoffees: () => void;
}

export function CoffeesAmountInput({
  amount,
  incrementAmountCoffees,
  decrementAmountCoffees,
}: CoffeesAmountInputProps) {
  return (
    <CoffeesAmountInputContainer>
      <button onClick={decrementAmountCoffees}>
        <Minus />
      </button>
      <span>{amount}</span>
      <button onClick={incrementAmountCoffees}>
        <Plus />
      </button>
    </CoffeesAmountInputContainer>
  );
}
