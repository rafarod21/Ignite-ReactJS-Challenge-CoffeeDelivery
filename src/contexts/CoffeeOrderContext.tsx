import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';

import { CoffeeType } from '../@types/Coffee';
import { Payments } from '../@types/Payments';
import { Address } from '../@types/Address';

import { Coffees, coffeesReducer } from '../reducers/Coffees/reducer';
import {
  addCoffeeAction,
  decrementOneCoffeeAction,
  incrementOneCoffeeAction,
  removeCoffeeAction,
} from '../reducers/Coffees/actions';

interface CoffeeOrderContextType {
  coffees: Coffees[];
  totalMoney: number;
  address: Address;
  payment: Payments;
  changePayment: (payment: Payments) => void;
}
export const CoffeeOrderContext = createContext({} as CoffeeOrderContextType);

interface CoffeeOrderContextProviderProps {
  children: ReactNode;
}

export function CoffeeOrderContextProvider({
  children,
}: CoffeeOrderContextProviderProps) {
  const [address, setAddress] = useState({} as Address);
  const [payment, setPayment] = useState<Payments>('');
  const [totalMoney, setTotalMoney] = useState(0);
  const [coffeesState, dispatch] = useReducer(coffeesReducer, []);

  function incrementOneCoffee(coffee: CoffeeType) {
    dispatch(incrementOneCoffeeAction(coffee));
  }

  function decrementOneCoffee(coffee: CoffeeType) {
    dispatch(decrementOneCoffeeAction(coffee));
  }

  function addCoffee(coffee: CoffeeType) {
    dispatch(addCoffeeAction(coffee));
  }

  function removeCoffee(coffee: CoffeeType) {
    dispatch(removeCoffeeAction(coffee));
  }

  function changePayment(payment: Payments) {
    setPayment(payment);
  }

  useEffect(() => {
    let total = 0;
    coffeesState.forEach((coffee) => {
      total += coffee.value * coffee.amount;
    });

    setTotalMoney(total);
  }, [coffeesState]);

  return (
    <CoffeeOrderContext.Provider
      value={{
        coffees: coffeesState,
        totalMoney,
        address,
        payment,
        changePayment,
      }}
    >
      {children}
    </CoffeeOrderContext.Provider>
  );
}
