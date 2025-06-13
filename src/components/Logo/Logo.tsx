import { FaPaw } from "react-icons/fa";
import styles from "./Logo.module.scss";

export const Logo = () => {

    return <div className={styles.logo}>
        <FaPaw className={styles.logo__icon} />
        <span className={styles.logo__text}>Lavender Zoo</span>
    </div>
}