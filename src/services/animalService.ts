import { get } from "./baseService";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async () => {
    const response = get(BASE_URL);

    return response;
};

export const getAnimal = async (id: number) => {
    const response = get(BASE_URL + id);

    return response;
};