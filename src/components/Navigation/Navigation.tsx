import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";
import { FaCalendarCheck, FaPaw} from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";

export const Navigation = () => {

    return <ul className={styles.navigation}>
        <li><NavLink to={"/animals"} className={({ isActive }) =>
    isActive ? `${styles.active}` : ""}><FaPaw />Våra djur</NavLink></li>
        <li><NavLink to={"#"}><FaCalendarCheck />Inför ditt besök</NavLink></li>
        <li><NavLink to={"#"}><FaSignsPost />Utforska parken</NavLink></li>
    </ul>
}