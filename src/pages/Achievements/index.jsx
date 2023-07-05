import styles from './achievements.module.css';
import MyCard from '../../components/Card';

function Achievements(){
    return(
        <section className={styles.container}>
            <h3 className={styles.title}>Réalisations</h3>
            <div className={styles.cardsGrid}>
                <MyCard/>
            </div>
        </section>
    );
}

export default Achievements;