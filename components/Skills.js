import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/Skills.module.css'

export default function Skills() {

  useEffect(() => {
    AOS.init({ duration: 2000});
  }, []);

  return (
    <section id="section-skills" className={styles.section}>
      <div className="title" data-aos="fade-up">
        <h2><span>03.</span> Skills</h2>        
      </div>
      <div className="content">
        <div className={styles.content}>
          <div className={styles.item} data-aos="fade-up" data-aos-delay= "500">
            <h3 >Langages</h3>
            <ul >
              <li>Javascript (ES6)</li>
              <li>HTML</li>
              <li>CSS / Sass</li>
              <li>SQL</li>
              <li>PHP</li>
              <li>C</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay= "1000">
            <h3 >Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Next</li>
              <li>Node</li>
              <li>Express</li>
              <li>Wordpress</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay= "1500">
            <h3>Tools</h3>
            <ul>
              <li>Bash</li>
              <li>Git & Github</li>
              <li>VSCode</li>
              <li>Chrome DevTools</li>
            </ul>          
          </div>
          <div data-aos="fade-up" data-aos-delay= "2000">
            <h3 >Design</h3>
            <ul >
              <li>Adobe XD</li>
              <li>Photoshop</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
