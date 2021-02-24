import React from 'react'
import { FaGithub } from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi'


import styles from './Works.module.css'

export const Projects = [
  // {
  //   id: 1,
  //   title: "Movie App - WIP",
  //   description: "Personal Project. We decided to build, with a friend, our own Movie App. We can rate a movie, add to watchlist or to watched. For series, the app allows you to know our progress in a season, to know if an episode has been completed.",
  //   tag: ["React", "Firebase", "Sass", "TMDB Api", "React Hooks"],
  //   github: "https://github.com/FlorianGazeau/movieApp",
  // },
  {
    id: 2,
    title: "Trasher Ecom App",
    description: "I wanted to recreate, through this site, the different features of an Ecommerce site using React and Redux.",
    tag: ["React", "Redux", "Firebase", "CSS"],
    github: "https://github.com/FlorianGazeau/react-firebase-ecom",
    link: "https://react-firebase-ecomapp.netlify.app"
  },
  {
    id: 3,
    title: "Clinique Juridique Montpellier",
    description: "I developed the showcase site of the Legal Clinic of Montpelier under wordpress. I used a tool like Elementor to create the different parts of the site. I also used a plugin for the translation of the site in 5 different languages",
    tag: ["Wordpress", "Elementor"],
    link: "https://www.cliniquejuridique.eu/"
  },
  {
    id: 4,
    title: "Passy Plaza",
    description: "During my internship, I had the opportunity to work on the PlassyPlaza website where I could learn the basics of wordpress",
    tag: ["Wordpress"],
    link: "https://www.passyplaza.fr/"
  },
  {
    id: 5,
    title: "Matcha",
    description: "2nd project of the Web branch of 42. Create a dating website where the user can create a profile, search for other users like them and start a conversation with a chat if the person liked it in return.",
    tag: ["React", "Node", "Express", "SQL", "Socket.io"],
    github: "https://github.com/FlorianGazeau/Matcha",
  },
  {
    id: 6,
    title: "Camagru",
    description: "Camagru is the first project of the Web branch of School 42. This web project allows you to do photo retouching using your webcam and some predefined images. Users of the application can select an image from a list of overlapping images, take a picture with their webcam and admire the result mixing the two images. All captured images are public, friendly and commentable.",
    tag: ["HTML", "CSS", "Javascript", "PHP", "SQL"],
    github: "https://github.com/FlorianGazeau/camagru",
  },

]

export default function Works() {

  const card = Projects.map(project => 
    <div key={project.id} className={styles.card}>
      <header className={styles.header}>
        <h3>{project.title}</h3>
        <div className={styles.icons}>
          {project.github ? 
            <a href={project.github}>
              <FaGithub/>
            </a>
            : ''          
          }
          {project.link ? 
            <a href={project.link} className={styles.external}>
              <FiExternalLink />
            </a>
            : ''
          }
        </div>
      </header>
      <div>
        <p>{project.description}</p>
      </div>
      <ul className={styles.tags}>
        {project.tag.map((tag, i) => 
          <li key={i} className={styles.tag}>{tag}</li>
        )}
      </ul>
    </div>
  )

  return (
    <section id="section-works" className="section">
      <div className="title">
        <h2><span>04.</span> Projects</h2>        
      </div>
      <div className="content">
        <div className={styles.projectGrid}>
          {card}
        </div>
      </div>
    </section>
  )
}
