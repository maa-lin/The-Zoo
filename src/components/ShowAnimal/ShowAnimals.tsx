import type { IAnimal } from "../../models/IAnimal";
import styles from "./ShowAnimal.module.scss";

type ShowAnimalProps = {
    animal: IAnimal
}

export const ShowAnimals = (props: ShowAnimalProps) => {

    return <div className={styles["animal-card"]}>
        <div className={styles["animal-card__img-container"]}>
            <img src={props.animal.imageUrl} alt={`Photo of ${props.animal.name}, ${props.animal.latinName}`} />
        </div>
        <div className={styles["animal-card__info"]}>
            <h2><span className="h2--unskewd">{props.animal.name}</span></h2>
            <p>{props.animal.shortDescription}</p>
            <div className={styles["animal-card__status"]}>
                <span>Status: </span>
                <strong>{props.animal.name} har nyss ätit mat</strong>
            </div>
            <button className={styles["animal-card__btn"]}>Gå till {props.animal.name}</button>
        </div>
    </div>
}