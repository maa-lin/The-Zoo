import type { LoaderFunctionArgs } from "react-router";
import { getAnimal } from "../services/animalService"

export const animalLoader = async ({ params }: LoaderFunctionArgs) => {

    if (!params.id) {
        throw new Error("Missing movie ID parameter")
    }

    const animal = await getAnimal(+params.id);

    return { animal };
}