import { NavLink } from "react-router";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero__title}>
        <span className={styles["hero__title--unskewd"]}>
          Välkommen till Lavender Zoo
        </span>
      </h1>
      <button className={styles.hero__button}><NavLink to={"/animals"}>Våra djur</NavLink></button>
    </div>
  );
};
