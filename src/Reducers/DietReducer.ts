import {Action} from '../types/action';

export default function userDietReducer(state, action: Action) {
  const {payload, type} = action;

  switch (type) {
    case DietActions.ADD_FOOD: {
      return [...state, {...payload}];
    }
    case DietActions.DELETE_FOOD: {
      return state.filter(food => food.id !== payload.id);
    }
    case DietActions.INCREMENT_INTAKE: {
      console.log(payload);
      return {...state};
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const DietActions = {
  ADD_FOOD: 'ADD_FOOD',
  DELETE_FOOD: 'DELETE_FOOD',
  TOGGLE_FOOD: 'TOGGLE_FOOD',
  INCREMENT_INTAKE: 'INCREMENT_INTAKE',
};
