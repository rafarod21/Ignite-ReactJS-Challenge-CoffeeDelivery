import { produce } from 'immer';

import { ActionTypes } from './actions';

import { CoffeeType } from '../../@types/Coffee';

export interface Coffees extends CoffeeType {
  amount: number;
}

interface ActionProps {
  type: ActionTypes;
  payload: {
    coffee: CoffeeType;
    amount?: number;
  };
}

export function coffeesReducer(state: Coffees[], action: ActionProps) {
  const coffeeIndex = state.findIndex(
    (coffee) => coffee.name === action.payload.coffee.name
  );

  switch (action.type) {
    case ActionTypes.INCREMENT_ONE_COFFEE:
      if (coffeeIndex === -1) {
        return state;
      }

      return produce(state, (draft) => {
        draft[coffeeIndex].amount += 1;
      });
    case ActionTypes.DECREMENT_ONE_COFFEE:
      if (coffeeIndex === -1) {
        return state;
      }

      return produce(state, (draft) => {
        draft[coffeeIndex].amount -= 1;
      });
    case ActionTypes.ADD_COFFEE:
      const amount = action.payload.amount;

      if (amount && amount > 0) {
        if (coffeeIndex === -1) {
          return produce(state, (draft) => {
            draft.push({
              ...action.payload.coffee,
              amount,
            });
          });
        } else {
          return produce(state, (draft) => {
            draft[coffeeIndex].amount += amount;
          });
        }
      }

      return state;
    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        draft.splice(coffeeIndex, 1);
      });

    default:
      return state;
  }
}
