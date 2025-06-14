import { useParams } from "react-router";
import { useContext, useState } from "react";
import { AnimalContext } from "../../contexts/AnimalContext";
import styles from "./AnimalDetail.module.scss";
import { FaPaw } from "react-icons/fa";

export const AnimalDetail = () => {
  const { id } = useParams();
  const { animals } = useContext(AnimalContext);

  const [brokenImg, setBrokenImg] = useState(false);

  if (!id) throw new Error("Missing id in parameter");

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) throw new Error("Animal not found");

  return (
    <section className={styles["animal-card"]}>
      <div className={styles["animal-card__img-container"]}>
        {!brokenImg ? (
          <img
            src={animal.imageUrl}
            alt={`Photo of ${animal.name}, ${animal.latinName}`}
            onError={() => setBrokenImg(true)}
          />
        ) : (
          <div className="img-placeholder">
            <FaPaw className={styles.icon} />
            <span>No image</span>
          </div>
        )}
      </div>
      <div className={styles["animal-card__info"]}>
        <h2>
          <span className="h2--unskewd">
            {animal.name} ({animal.latinName})
          </span>
        </h2>
        <p>{animal.longDescription}</p>
        <ul className={styles["animal-card__status"]}>
          <li>
            <span>Födelseår: </span> {animal.yearOfBirth}
          </li>
          <li>
            <span>Medicin: </span> {animal.medicine}
          </li>
          <li>
            <span>Status: </span> <strong>{animal.name} har nyss ätit</strong>
          </li>
        </ul>
        <button className={styles["animal-card__btn"]}>
          Mata {animal.name}
        </button>
      </div>
    </section>
  );
};
