import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

export const Navigation = () => {

    return <ul className={styles.navigation}>
        <li><NavLink to={"/animals"} className={({ isActive }) =>
    isActive ? `${styles.active}` : ""}>Våra djur</NavLink></li>
        <li><NavLink to={"#"}>Inför ditt besök</NavLink></li>
        <li><NavLink to={"#"}>Utforska parken</NavLink></li>
    </ul>
}