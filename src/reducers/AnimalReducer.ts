import type { IAnimal } from "../models/IAnimal";

export const AnimalActionTypes = {
  FED: 'FED'
} as const;

export type AnimalActionType = typeof AnimalActionTypes[keyof typeof AnimalActionTypes];

export type AnimalAction = {
    type: AnimalActionType,
    payload: string
}

export const AnimalReducer = (animals: IAnimal[], action: AnimalAction) => {

    switch (action.type) {
        case AnimalActionTypes.FED:
            return animals;
        default:
            return animals;
    }
}