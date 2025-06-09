import { getAnimals } from "../services/animalService"

export const animalsLoader = async () => {
    const animals = await getAnimals();

    return { animals };
};

