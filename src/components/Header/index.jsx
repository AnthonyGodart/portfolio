import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import ProfilePicture from '../ProfilePicture';

function Header(){
    return (
        <header className={styles.background}>
        <div className={styles.topHeader}>
            <div>
                <h1>Anthony GODART</h1>
                <h2> Développeur Web Junior</h2>
                <p className={styles.contact}> 7 rue d'Ezige, <br />
                07800 Charmes-sur-Rhône <br/>
                <hr style={{opacity:"0"}}/>
                    <a href="mailto:ag.anthony.godart@gmail.com" className={styles.contact}> 📨 : ag.anthony.godart@gmail.com </a>
                    <a href="tel:+33673114400" className={styles.contact}> 📞 : 06 73 11 44 00</a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/godart-anthony" className={styles.contact}> 🔗 :  LinkedIn </a> 
                </p>
            </div>
            <ProfilePicture />
        </div>
        <div>
            <nav className={styles.navBar}>
                <NavLink className={styles.link} style={({isActive}) => ({
    textDecoration: isActive ? "underline" : "none",
    backgroundColor: isActive ? "rgb(219, 243, 214)" : "rgb(33, 142, 36)",
    borderBottom: isActive ? "none" : "2px solid black",
    color: isActive ? "#000" : "#FFF"
  })} to="/">Présentation</NavLink>
                <NavLink className={styles.link} style={({isActive}) => ({
    textDecoration: isActive ? "underline" : "none",
    backgroundColor: isActive ? "rgb(219, 243, 214)" : "rgb(33, 142, 36)",
    borderBottom: isActive ? "none" : "2px solid black",
    color: isActive ? "#000" : "#FFF"
  })} to="/Education">Formation</NavLink>
                <NavLink className={styles.link} style={({isActive}) => ({
    textDecoration: isActive ? "underline" : "none",
    backgroundColor: isActive ? "rgb(219, 243, 214)" : "rgb(33, 142, 36)",
    borderBottom: isActive ? "none" : "2px solid black",
    color: isActive ? "#000" : "#FFF"
  })} to="/Experience">Expérience pro.</NavLink>
                <NavLink className={styles.link} style={({isActive}) => ({
    textDecoration: isActive ? "underline" : "none",
    backgroundColor: isActive ? "rgb(219, 243, 214)" : "rgb(33, 142, 36)",
    borderBottom: isActive ? "none" : "2px solid black",
    color: isActive ? "#000" : "#FFF"
  })} to="/Achievements">Réalisations</NavLink>
            </nav>
        </div>
    </header>
    );
}

export default Header;