import { Card, Col, Text } from "@nextui-org/react";
import { useState } from "react";
import styles from "./card.module.css";
import Booki from "../../images/Booki.webp";
import SophieBluel from "../../images/SophieBluel.webp";
import NinaCarducci from "../../images/NinaCarducci.webp";
import Kasa from "../../images/Kasa.webp";
import MonVieuxGrimoire from "../../images/MonVieuxGrimoire.webp";
import Portfolio from "../../images/Portfolio.webp";
import MaSonnette from "../../images/Sonnette.webp";
import SuspendedCoffee from "../../images/SuspendedCoffee.webp";
import Converter from "../../images/NumToStr.webp"

const data = {
  projet1: {
    title: "Booki - Locations de vacances à Marseille",
    link: "https://github.com/AnthonyGodart/Projet2_godart_anthony_03022023.git",
    description: "Intégration HTML et CSS du site de réservation en ligne Booki, en conformité avec une maquette, utilisation d'un kit FontAwesome, implémentation d'une interface responsive. Cliquez pour accéder au code.",
    image: `${Booki}`,
  },
  projet2: {
    title: "Sophie Bluel - Architecte",
    link: "https://github.com/AnthonyGodart/Projet3_godart_anthony_21022023.git",
    description: "Manipulation des éléments du DOM et gestion des événements utilisateurs avec JavaScript, récupération de données utilisateur dans le JavaScript via des formulaires. Cliquez pour accéder au code.",
    image: `${SophieBluel}`,
  },
  projet3: {
    title: "Nina Carducci Photographe - Optimisation et SEO",
    link: "https://github.com/AnthonyGodart/Projet5_godart_anthony_04052023.git",
    description: "Optimiser les performances du site, débugger le site avec les Chrome Devtools, rédiger un cahier de recettes pour tester le site. Cliquez pour accéder au code.",
    image: `${NinaCarducci}`,
  },
  projet4: {
    title: "Kasa - Agence de location immobilière entre particuliers",
    link: "https://github.com/AnthonyGodart/Projet6_godart_anthony_052023.git",
    description: "Initialiser une application avec Create React App, développer les éléments de l'interface d'un site web grâce à des composants React, configurer la navigation entre les pages de l'application avec React Router.  Cliquez pour accéder au code.",
    image: `${Kasa}`,
  },
  projet5: {
    title: "Mon Vieux Grimoire - Site de notation de livres",
    link: "https://github.com/AnthonyGodart/Projet7_godart_anthony_062023.git",
    description: "Mettre en oeuvre les opérations CRUD et stocker des données de manière sécurisée, implémenter un modèle logique de données, conformément à la règlementation. Cliquez pour accéder au code.",
    image: `${MonVieuxGrimoire}`,
  },
  projet6: {
    title: "Portfolio",
    link: "https://github.com/AnthonyGodart/portfolio.git",
    description: "Portfolio d'Anthony Godart",
    image: `${Portfolio}`,
  },
  projet7: {
    title: "Ma Sonnette",
    link: "https://github.com/AnthonyGodart/qr_ringer/blob/main/README.md",
    description: "Side-project d'une sonnette via QR Code. Découverte autodidacte de React Native, Expo, One Signal.",
    image: `${MaSonnette}`,
  },
  projet8: {
    title: "Le Café Suspendu",
    link: "",
    description: "Side-project pour afficher des établissements qui pratiquent le café suspendu. Découverte en autodidacte de PHP.",
    image: `${SuspendedCoffee}`,
  },
  projet9: {
    title: "Numeric to String converter",
    link: 'https://github.com/AnthonyGodart/NumToStr.git',
    description: "Outil pour convertir un nombre de sa version numérique à sa version toutes lettres",
    image: `${Converter}`
  },
};

function MyCard() {
  const isMobileDevice = /Mobile/.test(navigator.userAgent);

  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleClick = (projetKey) => {
    setActiveCard(projetKey === activeCard ? null : projetKey);
  };

  const handleMouseEnter = (projetKey) => {
    setHoveredCard(projetKey);
  };
  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  if (isMobileDevice){
    return (
    <>
      {Object.keys(data).map((projetKey) => {
        const projet = data[projetKey];
        const isActive = projetKey === activeCard;
        

        return (
          <div
            key={projetKey}
            onClick={() => handleClick(projetKey)}>
            <Card className={isActive ? styles.activeCard : ''} css={isActive ? { height:'200px' } : '' }>
              {!isActive && (
                <Card.Header className={styles.header}r>
                  <Col>
                    <Text h4 color="black" margin="0">
                      {projet.title}
                    </Text>
                  </Col>
                </Card.Header>
              )}
              <Card.Image
                src={projet.image}
                objectFit="cover"
                width="100%"
                height={isActive ? 250 : 150}
                alt={`${projet.title} background`}
              />
              {isActive && (
                <Card.Footer className={styles.footer}>
                  <Text>
                    <a className={styles.cardLink} href={projet.link!==""? projet.link : null}>
                      {projet.description}
                    </a>
                  </Text>
                </Card.Footer>
              )}
            </Card>
          </div>
        );
      })}
    </>
  );
  } else {
  return (
    <>
      {Object.keys(data).map((projetKey) => {
        const projet = data[projetKey];

        const isHovered = hoveredCard === projetKey;

        return (
          <a
            href={projet.link!==""? projet.link : null}
            target="_blank"
            rel="noreferrer"
            className={styles.cardLink}
            key={projetKey}
            onMouseEnter={() => handleMouseEnter(projetKey)}
            onMouseLeave={handleMouseLeave}
          >
            <Card responsive className={isHovered ? styles.hoveredCard : ''}>
  {!isHovered && (
    <Card.Header className={styles.header}>
      <Col>
        <Text h4 color="black" margin="0">
          {projet.title}
        </Text>
      </Col>
    </Card.Header>
  )}
  <Card.Image
    src={projet.image}
    objectFit="cover"
    width="100%"
    height={isHovered ? 250 : 150}
    alt={`${projet.title} background`}
  />
  {isHovered && (
    <Card.Footer className={styles.footer}>
      <Text className={styles.description}>{projet.description}</Text>
    </Card.Footer>
  )}
</Card>

          </a>
        );
      })}
    </>
  );
  }
}

export default MyCard;
