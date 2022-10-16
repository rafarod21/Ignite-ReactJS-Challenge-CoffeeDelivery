import { useContext, useState } from 'react';
import { ShoppingCart } from 'phosphor-react';

import { CoffeesAmountInput } from '../CoffeesAmountInput';
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext';

import { CoffeeType } from '../../@types/Coffee';

import {
  CoffeeCardContainer,
  TagsContainer,
  CardFooter,
  ShoppingCartButton,
} from './styles';

interface CoffeeCardProps {
  coffee: CoffeeType;
}

const MAX_COFFEES = 50;

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { coffees, addCoffee } = useContext(CoffeeOrderContext);
  const [amountCoffee, setAmountCoffee] = useState(0);

  function handleIncrementAmountCoffees() {
    if (amountCoffee < MAX_COFFEES) setAmountCoffee((state) => state + 1);
  }

  function handleDecrementAmountCoffees() {
    if (amountCoffee > 0) setAmountCoffee((state) => state - 1);
  }

  function handleAddCoffeeToShoppingCart() {
    if (amountCoffee > 0) {
      addCoffee(coffee, amountCoffee);
      setAmountCoffee(0);
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt='Expresso Tradicional' />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>
      <h4>{coffee.name}</h4>
      <span>{coffee.description}</span>
      <CardFooter>
        <span>
          R$ <strong>{coffee.value}</strong>
        </span>
        <div>
          <CoffeesAmountInput
            amount={amountCoffee}
            incrementAmountCoffees={handleIncrementAmountCoffees}
            decrementAmountCoffees={handleDecrementAmountCoffees}
          />
          <ShoppingCartButton onClick={handleAddCoffeeToShoppingCart}>
            <ShoppingCart weight='fill' />
          </ShoppingCartButton>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
