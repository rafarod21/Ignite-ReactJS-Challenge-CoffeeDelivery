import { useContext, useState } from 'react';
import { ShoppingCart, Trash } from 'phosphor-react';

import { CoffeesAmountInput } from '../CoffeesAmountInput';

import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext';

import { Coffees } from '../../reducers/Coffees/reducer';

import { formatValueInCurrentCoin } from '../../utils/formatValueInCurrentCoin';

import { CoffeeCardCheckoutContainer } from './styles';

const MAX_COFFEES = 50;

interface CoffeeCardCheckoutProps {
  coffee: Coffees;
}

export function CoffeeCardCheckout({ coffee }: CoffeeCardCheckoutProps) {
  const { incrementOneCoffee, decrementOneCoffee, removeCoffee } =
    useContext(CoffeeOrderContext);
  const [amountCoffee, setAmountCoffee] = useState(coffee.amount);

  function handleIncrementOneCoffee() {
    if (amountCoffee < MAX_COFFEES) {
      setAmountCoffee((state) => state + 1);
      incrementOneCoffee(coffee);
    }
  }

  function handleDecrementOneCoffee() {
    if (amountCoffee > 1) {
      setAmountCoffee((state) => state - 1);
      decrementOneCoffee(coffee);
    }
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee);
  }

  return (
    <CoffeeCardCheckoutContainer>
      <img src={coffee.image} alt={coffee.name} />
      <div>
        <div>
          <span>{coffee.name}</span>
          <strong>
            {formatValueInCurrentCoin(coffee.value * coffee.amount)}
          </strong>
        </div>
        <div>
          <CoffeesAmountInput
            amount={amountCoffee}
            decrementAmountCoffees={handleDecrementOneCoffee}
            incrementAmountCoffees={handleIncrementOneCoffee}
          />
          <button type='button' onClick={handleRemoveCoffee}>
            <Trash /> REMOVER
          </button>
        </div>
      </div>
    </CoffeeCardCheckoutContainer>
  );
}
