import { NavLink, useParams } from "react-router";
import { useContext, useState } from "react";
import { AnimalContext } from "../../contexts/AnimalContext";
import styles from "./AnimalDetail.module.scss";
import { FaArrowLeft, FaPaw } from "react-icons/fa";
import JSConfetti from "js-confetti";
import { AnimalActionTypes } from "../../reducers/AnimalReducer";
import { statusMessages } from "../../helpers/statusHelpers";

export const AnimalDetail = () => {
  const { id } = useParams();
  const { animals, dispatch } = useContext(AnimalContext);

  const [brokenImg, setBrokenImg] = useState(false);
  const [notHungry, setnotHungry] = useState(false);

  if (!id) throw new Error("Missing id in parameter");

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) throw new Error("Animal not found");

  const status = statusMessages(animal);

  const handleClickFeed = () => {
    dispatch({
      type: AnimalActionTypes.FED,
      payload: id,
    });

    setTimeout(() => {
      dispatch({
        type: AnimalActionTypes.RESET_FED,
        payload: id,
      });
    }, 4 * 60 * 60 * 1000);
  };

  const handleClickPet = () => {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      emojis: ["❤️"],
      confettiNumber: 50,
      emojiSize: 45,
    });
  };

  return (
    <section className={styles["animal-card"]}>
      <NavLink to={"/animals"} className={styles["animal-card__back"]}><button><FaArrowLeft /></button></NavLink>
      <div className={styles["animal-card__img-container"]}>
        {!brokenImg ? (
          <img
            src={animal.imageUrl}
            alt={`Photo of ${animal.name}, ${animal.latinName}`}
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
            <span>Status: </span>{" "}
            <strong className={status.class}>
              {animal.name} {status.message}
            </strong>
          </li>
        </ul>
        <span
          className={`${styles["animal-card__error-message"]} ${
            notHungry ? styles["animal-card__error-message--visible"] : ""
          }`}
        >
          {animal.name} är inte hungrig än
        </span>
        <div className={styles["animal-card__btn-container"]}>
          <button
            className={styles["animal-card__btn"]}
            onClick={handleClickPet}
          >
            Klappa {animal.name}
          </button>
          <button
            className={`${styles["animal-card__btn"]} ${animal.isFed ? styles["animal-card__btn--hungry"] : ""}`}
            onClick={() => {
              if (animal.isFed) {
                setnotHungry(true);

                setTimeout(() => {
                  setnotHungry(false);
                }, 2000);
              } else {
                handleClickFeed();
              }
            }}
          >
            Mata {animal.name}
          </button>
        </div>
      </div>
    </section>
  );
};
