import React from 'react'

import styles from './Skills.module.css'

export default function Skills() {

  return (
    <section id="section-skills" className={styles.section}>
      <div className="title">
        <h2><span>03.</span> Skills</h2>        
      </div>
      <div className="content">
        <div className={styles.content}>
          <div className={styles.item}>
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
          <div>
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
          <div>
            <h3>Tools</h3>
            <ul>
              <li>Bash</li>
              <li>Git & Github</li>
              <li>VSCode</li>
              <li>Chrome DevTools</li>
            </ul>          
          </div>
          <div>
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
