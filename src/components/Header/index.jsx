import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import ProfilePicture from '../ProfilePicture';

const mail = "ag.anthony.godart@proton.me";
const tel = "06 73 11 44 00"
const telWithIndicative = "+33673114400"

function Header(){
    return (
        <header className={styles.background}>
        <div className={styles.topHeader}>
            <div>
                <h1>Anthony GODART</h1>
                <h2> Développeur Back-end JS / PHP</h2>
                <p className={styles.contact}> 7 rue d'Ezige, <br />
                07800 Charmes-sur-Rhône <br/>
                <hr style={{opacity:"0"}}/>
                    <a href={`mailto:${mail}`} className={styles.contact}> 📨  {mail} </a>
                    <a href={`tel:${telWithIndicative}`} className={styles.contact}> 📞  {tel}</a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/godart-anthony" className={styles.contact}> 🔗   LinkedIn </a> 
                </p>
            </div>
            <ProfilePicture />
        </div>
        <div>
            <nav className={styles.navBar}>
                <NavLink className={styles.link} style={({isActive}) => ({
    backgroundColor: isActive ? "rgba(238, 187, 195, 0.9)" : "rgba(238, 187, 195, 0.7)",
    borderBottom: isActive ? "none" : "2px solid black",
    fontWeight: isActive ? "800" : "500"
  })} to="/">Présentation</NavLink>
                <NavLink className={styles.link} style={({isActive}) => ({
    backgroundColor: isActive ? "rgba(238, 187, 195, 0.9)" : "rgba(238, 187, 195, 0.7)",
    borderBottom: isActive ? "none" : "2px solid black",
    fontWeight: isActive ? "800" : "500"
  })} to="/Education">Formation</NavLink>
                <NavLink className={styles.link} style={({isActive}) => ({
    backgroundColor: isActive ? "rgba(238, 187, 195, 0.9)" : "rgba(238, 187, 195, 0.7)",
    borderBottom: isActive ? "none" : "2px solid black",
    fontWeight: isActive ? "800" : "500"
  })} to="/Experience">Expérience pro.</NavLink>
                <NavLink className={styles.link} style={({isActive}) => ({
    backgroundColor: isActive ? "rgba(238, 187, 195, 0.9)" : "rgba(238, 187, 195, 0.7)",
    borderBottom: isActive ? "none" : "2px solid black",
    fontWeight: isActive ? "800" : "500"
  })} to="/Achievements">Réalisations</NavLink>
            </nav>
        </div>
    </header>
    );
}

export default Header;