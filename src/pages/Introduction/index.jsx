import styles from './introduction.module.css';

function Introduction(){
    return(
        <section className={styles.container}>
            <h3 className={styles.title}>Présentation</h3>
            <p className={styles.paragraph}>
            Avec 14 ans d'expérience dans l'industrie de la maintenance automobile, j'ai récemment pris une décision audacieuse : me reconvertir en tant que Développeur web. <br /> <br />
            Passionné par la technologie et avide d'apprendre de nouvelles compétences, je suis maintenant à la recherche d'une entreprise qui me permettra de mettre en pratique mes connaissances fraîchement acquises tout en continuant ma formation.
            </p><p className={styles.paragraph}>
            Ma reconversion dans le développement web démontre ma détermination et ma capacité à m'adapter rapidement aux nouvelles opportunités.  <br /> <br />
            Je suis prêt à apporter ma passion, ma créativité et ma rigueur pour contribuer au succès de votre entreprise.
            </p><p className={styles.paragraph}>
            Je suis disponible immédiatement pour relever de nouveaux défis et je suis prêt à me déplacer dans la région Auvergne-Rhône-Alpes, sous certaines conditions.  <br /> <br />
            Je suis convaincu que ma solide expérience professionnelle combinée à ma motivation et ma volonté d'apprendre font de moi un candidat idéal pour rejoindre votre équipe.
            </p><p className={styles.paragraph}>
            Je serais ravi de discuter avec vous et d'en apprendre davantage sur les opportunités de collaboration.  <br /> <br />
            N'hésitez pas à me contacter pour planifier une rencontre.
            Merci pour votre attention et j'ai hâte de contribuer à votre succès !
            </p>
        </section>
    );
}

export default Introduction;