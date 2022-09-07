import { useState } from "react";
import { Minus, Plus } from "phosphor-react";

import { CoffeesAmountInputContainer } from "./styles";

const MAX_COFFEES = 50;

export function CoffeesAmountInput() {
  const [coffeesAmount, setCoffeesAmount] = useState(0);

  function incrementCoffeesAmount() {
    if (coffeesAmount < MAX_COFFEES) setCoffeesAmount((state) => state + 1);
  }

  function decrementCoffeesAmount() {
    if (coffeesAmount > 0) setCoffeesAmount((state) => state - 1);
  }
  return (
    <CoffeesAmountInputContainer>
      <button onClick={decrementCoffeesAmount}>
        <Minus />
      </button>
      <span>{coffeesAmount}</span>
      <button onClick={incrementCoffeesAmount}>
        <Plus />
      </button>
    </CoffeesAmountInputContainer>
  );
}
