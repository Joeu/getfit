import {Action} from '../types/action';

export default function userExercisesReducer(state, action: Action) {
  const {payload, type} = action;

  switch (type) {
    case ExercisesActions.ADD_EXERCISE: {
      return [...state, payload];
    }
    case ExercisesActions.DELETE_EXERCISE: {
      return state.filter(item => item.id !== payload.id);
    }
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
}

export const ExercisesActions = {
  ADD_EXERCISE: 'ADD_EXERCISE',
  DELETE_EXERCISE: 'DELETE_EXERCISE',
};
