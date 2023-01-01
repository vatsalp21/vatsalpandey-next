import styles from "../styles/Home.module.scss";
import Image from "next/image";
import sectionTwo from "../images/sectionTwo.png";
import { Flex } from "../components/StyleComponents";

export const projectsLinks = [
  {
    name: "MAGIC MATCH",
    link: "https://incomparable-malabi-6466ca.netlify.app",
  },
  {
    name: "WEATHER APP",
    link: "https://vatsal-weather-web-app.onrender.com/",
  },
  {
    name: "GUESSING GAME",
    link: "https://vatsalp21.github.io/Vuejs-GuessingGame",
  },
];

export const Projects = () => (
  <Flex className={styles.projects}>
    <div className={styles.sectionTwoImage}>
      <Image src={sectionTwo} alt="sectionTwo" />
    </div>
    <div className={styles.projectsLinks}>
      <h1 className={styles.sectionHeading}>{"=> Popular Projects"}</h1>
      {projectsLinks.map((project, index) => (
        <a
          id="button"
          className={styles.project}
          key={index}
          href={project.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <p>{project.name}</p>
        </a>
      ))}
    </div>
  </Flex>
);
