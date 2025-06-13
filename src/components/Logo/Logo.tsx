import { FaPaw } from "react-icons/fa";
import styles from "./Logo.module.scss";
import { NavLink } from "react-router";

export const Logo = () => {

    return <div className={styles.logo}>
        <NavLink to={"/"}>
        <FaPaw className={styles.logo__icon} />
        <span className={styles.logo__text}>Lavender Zoo</span>
    </NavLink>
    </div>
}