import styles from './education.module.css'

function Education(){
    return(
        <main className={styles.container}>
            <h3 className={styles.title}>Formation</h3>
            <article className={styles.paragraph}>
                <h4>Bac + 2 - Développeur Intégrateur Web 2023 </h4>
                <p>
                ↪ Création d'une page d'accueil d'agence de voyage avec HTML et CSS <br />
                ↪ Création d'une page web dynamique avec Javascript <br />
                ↪ Planifier le développement du site client <br />
                ↪ Debugger le site web d'un photographe <br />
                ↪ Création d'une application web de location immobilière avec React <br />
                ↪ Développer le back-end d'un site de notation de livres <br />
                ↪ Créer et publier mon portfolio de développeur <br />
                </p>
            </article>
            <article className={styles.paragraph}>
                <h4>CAP - BEP - BAC PRO Maintenance des véhicules 2008 - 2010 </h4>
                <p>
                ↪ En alternance <br />
                ↪ Entretien, réparation, diagnostic et recherche de pannes
                </p>
            </article>
            <article className={styles.paragraph}>
                <h4>BAC S option Sciences de l'Ingénieur 2006</h4>
            </article>
        </main>
    );
}

export default Education;