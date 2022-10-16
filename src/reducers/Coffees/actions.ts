import { CoffeeType } from '../../@types/Coffee';

export enum ActionTypes {
  INCREMENT_ONE_COFFEE = 'INCREMENT_ONE_COFFEE',
  DECREMENT_ONE_COFFEE = 'DECREMENT_ONE_COFFEE',
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export function incrementOneCoffeeAction(coffee: CoffeeType) {
  return {
    type: ActionTypes.INCREMENT_ONE_COFFEE,
    payload: {
      coffee,
    },
  };
}

export function decrementOneCoffeeAction(coffee: CoffeeType) {
  return {
    type: ActionTypes.DECREMENT_ONE_COFFEE,
    payload: {
      coffee,
    },
  };
}

export function addCoffeeAction(coffee: CoffeeType, amount: number) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      coffee,
      amount,
    },
  };
}

export function removeCoffeeAction(coffee: CoffeeType) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffee,
    },
  };
}
