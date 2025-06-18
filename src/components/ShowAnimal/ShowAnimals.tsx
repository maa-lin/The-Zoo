import { NavLink } from "react-router";
import type { IAnimal } from "../../models/IAnimal";
import styles from "./ShowAnimal.module.scss";
import { useState } from "react";
import { FaPaw } from "react-icons/fa";
import { statusMessages } from "../../helpers/statusHelpers";

type ShowAnimalProps = {
  animal: IAnimal;
};

export const ShowAnimals = (props: ShowAnimalProps) => {
  const [brokenImg, setBrokenImg] = useState(false);

  const status = statusMessages(props.animal);

  return (
    <div className={styles["animal-card"]}>
      <div className={styles["animal-card__img-container"]}>
        {!brokenImg ? (
          <img
            src={props.animal.imageUrl}
            alt={`Photo of ${props.animal.name}, ${props.animal.latinName}`}
            onError={() => setBrokenImg(true)}
          />
        ) : (
          <div className="img-placeholder">
            <FaPaw />
            <span>No image</span>
          </div>
        )}
      </div>
      <div className={styles["animal-card__info"]}>
        <h2>
          <span className="h2--unskewd">{props.animal.name}</span>
        </h2>
        <p>{props.animal.shortDescription}</p>
        <div className={styles["animal-card__status"]}>
          <span>Status: </span>
          <strong className={status.class}>{props.animal.name} {status.message}</strong>
        </div>
        <NavLink
          to={`/animals/${props.animal.id}`}
          className={styles["animal-card__btn"]}
        >
          <button>Gå till {props.animal.name}</button>
        </NavLink>
      </div>
    </div>
  );
};
