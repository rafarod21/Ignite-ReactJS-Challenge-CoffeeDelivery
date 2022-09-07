import { ShoppingCart, Trash } from "phosphor-react";

import { CoffeesAmountInput } from "../CoffeesAmountInput";

import { CoffeeCardCheckoutContainer } from "./styles.ts";

interface CoffeeCardCheckoutProps {
  name?: string;
  value?: string;
  image?: string;
}

export function CoffeeCardCheckout({
  name,
  value,
  image
}: CoffeeCardCheckoutProps) {
  return (
    <CoffeeCardCheckoutContainer>
      <img src="CoffeesImages/expresso.png" alt="Expresso Tradicional" />
      <div>
        <div>
          <span>Expresso Tradicional</span>
          <strong>R$ 9,90</strong>
        </div>
        <div>
          <CoffeesAmountInput />
          <button>
            <Trash /> REMOVER
          </button>
        </div>
      </div>
    </CoffeeCardCheckoutContainer>
  );
}
