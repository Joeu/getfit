type Common = {
  id: string;
  name: string;
  description: string;
  time?: Date;
  repeat?: string;
};

export type Exercise = Common & {
  fatBurn: number;
};

type NutritionFacts = {
  nutritionFacts: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
};

export type Food = Common & NutritionFacts;

export type Combined = Food | Exercise;
