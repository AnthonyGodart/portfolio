import styles from './footer.module.css';
import { NavLink } from 'react-router-dom';

function Footer(){

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
        <NavLink className={styles.link} to="/">Accueil</NavLink>
        <p className={styles.paragraph}> Site réalisé par Anthony GODART. © {currentYear} - Tous droits réservés. </p>
    </footer>
    );
}

export default Footer;