import type { IAnimal } from "../models/IAnimal";
import { get } from "./baseService";

const BASE_URL = "https://animals.azurewebsites.net/api/animals/";

export const getAnimals = async () => {
    const response = get<IAnimal[]>(BASE_URL);

    return response;
};

export const getAnimal = async (id: number) => {
    const response = await get<IAnimal>(BASE_URL + id);

    return response;
};