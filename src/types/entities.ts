type Common = {
  id: string;
  name: string;
  description: string;
  time: Date;
};

export type Exercise = Common & {
  fatBurn: number;
  repeat: string;
};

type NutritionFacts = {
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
};

export type Food = Common & NutritionFacts;
