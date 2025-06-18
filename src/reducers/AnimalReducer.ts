import type { IAnimal } from "../models/IAnimal";

export const AnimalActionTypes = {
  FED: "FED",
  RESET_FED: "RESET_FED",
  SET_ANIMALS: "SET_ANIMALS",
} as const;

export type AnimalActionType =
  (typeof AnimalActionTypes)[keyof typeof AnimalActionTypes];

export type AnimalAction = {
  type: AnimalActionType;
  payload: string;
};

export const AnimalReducer = (animals: IAnimal[], action: AnimalAction) => {
  switch (action.type) {
    case AnimalActionTypes.SET_ANIMALS: {
      const animalsToAdd = JSON.parse(action.payload) as IAnimal[];
      const now = Date.now();

      const updatedAnimals = animalsToAdd.map((a) => {
        const lastFed = new Date(a.lastFed).getTime();
        const isFed = now - lastFed < 2 * 60 * 1000;

        return { ...a, isFed };
      });

      return updatedAnimals;
    }
    case AnimalActionTypes.FED: {
      return animals.map((a) => {
        if (a.id === +action.payload) {
          
          return { ...a, lastFed: new Date().toISOString(), isFed: true };
        }
        return a;
      });
    }
    case AnimalActionTypes.RESET_FED: {
      return animals.map((a) => {
        if (a.id === +action.payload) {
          return { ...a, isFed: false };
        }
        return a;
      });
    }

    default:
      return animals;
  }
};
