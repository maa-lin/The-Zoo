import styles from "./Footer.module.scss";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaYoutube } from "react-icons/fa6";

export const Footer = () => {

    return <footer className={styles.footer}>
        <div className={styles["footer__list-container"]}>
            <h2 className={styles.footer__title}><span className={styles["footer__title--unskewd"]}>Allt om oss</span></h2>
            <ul>
                <li><a href="#">Om oss</a></li>
                <li><a href="#">Frågor och svar</a></li>
                <li><a href="#">Kontakta oss</a></li>
            </ul>
        </div>

        <a href="https://www.google.com/maps" target="_blank" className={styles.footer__location}><FaLocationDot /> Lavendelvägen 12, 345 67 Vallmoås</a>
    
        <div className={`${styles["footer__list-container"]} ${styles["footer__list-container--socialmedia"]}`}>
            <h2 className={styles.footer__title}><span className={styles["footer__title--unskewd"]}>Följ oss på sociala medier</span></h2>
            <ul>
                <li><a href="https://www.instagram.com/" target="_blank"><FaInstagram className={styles.footer__socialmedia} /></a></li>
                <li><a href="https://www.youtube.com/" target="_blank"><FaFacebookF className={styles.footer__socialmedia}/></a></li>
                <li><a href="https://www.facebook.com/?locale=sv_SE" target="_blank"><FaYoutube className={styles.footer__socialmedia}/></a></li>
            </ul>
        </div>
    </footer>
}