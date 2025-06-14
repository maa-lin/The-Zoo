import { NavLink } from "react-router";
import { Logo } from "../Logo/Logo";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.error}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.error__text}>
        <h1>Error 404</h1>
        <p>The page you ware looking for does not exist.</p>
        <NavLink to={"/"}>Go back to the startpage</NavLink>
      </div>
    </div>
  );
};
