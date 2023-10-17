import {createContext} from 'react';
import {Exercise, Food} from '../types/entities';

type DailyFeed = {
  exercises: Exercise[];
  diet: Food[];
  intake: number;
  spentKcal: number;
};

type DailyDispatch = {
  dispatchExercise: () => void;
  dispatchDiet: () => void;
};

type SummaryOverview = {
  goal: number;
  total: number;
  setTotal: (value: number) => void;
};

type SummaryContext = {
  intake: SummaryOverview;
  burn: SummaryOverview;
};

export const DailyFeedContext = createContext<DailyFeed>({
  exercises: [],
  diet: [],
  intake: 0,
  spentKcal: 0,
});

export const DailyFeedDispatchContext = createContext<DailyDispatch>({
  dispatchExercise: function (): void {
    throw new Error('Function not implemented.');
  },
  dispatchDiet: function (): void {
    throw new Error('Function not implemented.');
  },
});

export const SummaryCountersContext = createContext<SummaryContext>({
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
