import styles from './experience.module.css'

function Experience(){
    return(
        <main className={styles.container}>
            <h3 className={styles.title}>Expérience Professionnelle</h3>
            <article className={styles.paragraph}>
                <h4>Développeur Junior</h4>
                <p></p>
            </article>
            <article className={styles.paragraph}>
                <h4>Consultant technique - Freelance</h4>
                <p>
                <span>Consult'Auto</span> <br/>
                <span>2021-2023</span> <br/>
                ↪ Consulting autour de l'automobile.
                </p>
            </article>
            <article className={styles.paragraph}>
                <h4>Technicien SAV</h4>
                <p>
                <span>Tranchard SARL</span> <br/>
                <span>2019-2021</span> <br/>
                ↪ Interventions SAV et préparation de matériels agricoles.
                </p>
            </article>
            <article className={styles.paragraph}>
                <h4>Leader Atelier</h4>
                <p>
                <span>Feu Vert Services</span> <br/>
                <span>2017-2019</span> <br/>
                ↪ Management, entretien et diagnostic de véhicules automobiles.
                </p>
            </article>
            <article className={styles.paragraph}>
                <h4>Mécanicien Automobiles</h4>
                <p>
                <span>Norauto</span> <br/>
                <span>2012-2017</span> <br/>
                ↪ Entretien et diagnostic de véhicules automobiles
                </p>
            </article>
        </main>
    );
}

export default Experience;