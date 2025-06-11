import { getAnimals } from "../services/animalService"

export const animalsLoader = async () => {
    const animalList = await getAnimals();

    return { animalList };
};

