import { useContext } from "react";
import { AnimalContext } from "../../contexts/AnimalContext";
import { ShowAnimals } from "../ShowAnimal/ShowAnimals";
import styles from "./AnimalPresentation.module.scss";

export const AnimalPresentation = () => {

    const { animals } = useContext(AnimalContext);

    return <section className={styles["animals-container"]}>
        {animals.map((a) => (
            <ShowAnimals key={a.id} animal={a} />
        ))}
    </section>
}