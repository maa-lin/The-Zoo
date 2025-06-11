import { useContext } from "react"
import { AnimalContext } from "../../contexts/AnimalContext"
import { ShowAnimals } from "../ShowAnimal/ShowAnimals";

export const AnimalPresentation = () => {

    const { animals } = useContext(AnimalContext);

    return <>
        <h1>Animals</h1>
        {animals.map((a) => (
            <ShowAnimals key={a.id} animal={a} />
        ))}
    </>
}