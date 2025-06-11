import type { IAnimal } from "../models/IAnimal";

export const AnimalActionTypes = {
  FED: "FED",
  SET_ANIMALS: "SET_ANIMALS" 
} as const;

export type AnimalActionType = typeof AnimalActionTypes[keyof typeof AnimalActionTypes];

export type AnimalAction = {
    type: AnimalActionType,
    payload: string
}

export const AnimalReducer = (animals: IAnimal[], action: AnimalAction) => {

    switch (action.type) {
        case AnimalActionTypes.SET_ANIMALS: {
            const animalsToAdd = JSON.parse(action.payload) as IAnimal[];

            return animalsToAdd;
        }
        case AnimalActionTypes.FED:
            return animals;
        default:
            return animals;
    }
}