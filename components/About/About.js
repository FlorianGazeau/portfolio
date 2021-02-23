import React from 'react'

import styles from './About.module.css'

export default function About() {

  return (
    <section id="section-about" className={styles.section}>
      <div className="title">
        <h2><span>01.</span> About me</h2>   
      </div>
      <div className="content">
        <p>I am currently working as a freelance data manager at Pandascore. PandaScore is the provider of real-time statistics for the e-sports. I studied at school 42 in Paris where I learned the C language and web development. And other skills such as being autonomous, learning quickly and being rigorous.</p>
        <p>If you don't find me in front of my lines of code. You may see me during a chess game, a hike in the forest or skateboarding.</p>
      </div>
    </section>
  )
}
