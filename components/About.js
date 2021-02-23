import React from 'react'

import styles from '../styles/About.module.css'

export default function About() {

  return (
    <section id="section-about" className={styles.section}>
      <div className="title">
        <h2><span>01.</span> About me</h2>   
      </div>
      <div className="content">
        <p>I'm currently a freelance data manager for a startup named Pandascore, building things in esport and I'm also a freelance front end developer. I am an alumni of school 42 in Paris where I did a 6 month internship in a start up company named Sylphe as a developer. I learned to be resourceful and autonomous. Google is now my best friend </p>
        <p>If you don't find me in front of my lines of code. You may see me during a chess game, a hike in the forest or skateboarding.</p>
      </div>
    </section>
  )
}
