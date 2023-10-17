import {createContext} from 'react';
import {Exercise, Food} from '../types/entities';

type DailyFeed = {
  exercises: Exercise[];
  diet: Food[];
  intake: number;
  spentKcal: number;
};

export const DailyFeedContext = createContext<DailyFeed>({
  exercises: [],
  diet: [],
  intake: 0,
  spentKcal: 0,
});

export const DailyFeedDispatchContext = createContext({
  dispatchExercise: (arg: any) => {},
  dispatchDiet: (arg: any) => {},
});

export const SummaryCountersContext = createContext({
  intake: {
    goal: 0,
    total: 0,
    setTotal: (value: number) => {},
  },
  burn: {
    goal: 0,
    total: 0,
    setTotal: (value: number) => {},
  },
});
