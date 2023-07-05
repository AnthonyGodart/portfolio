import styles from './achievements.module.css';
import MyCard from '../../components/Card';

function Achievements(){
    const isMobileDevice = /Mobile/.test(navigator.userAgent);
    if(isMobileDevice){
    return(
        <main className={styles.container}>
            <h3 className={styles.title}>Réalisations</h3>
            <div>
            <p>Cliquez sur une carte pour afficher sa description.</p>
            <p>Cliquez sur la description pour accéder au code source.</p>
            </div>
            <div className={styles.cardsGrid}>
                <MyCard/>
            </div>
        </main>
    );
    } else {
        return(
            <main className={styles.container}>
                <h3 className={styles.title}>Réalisations</h3>
                <div className={styles.cardsGrid}>
                    <MyCard/>
                </div>
            </main>
        );
    }
}

export default Achievements;