import React, { useEffect, useState, useRef } from 'react'
import Zoom from 'react-reveal/Zoom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import sr from '../utils/ScrollReveal'

import styles from '../styles/About.module.css'

export default function About() {
  const inputEl = useRef(null);
  // const config = {
  //   origin: 'right',
  //   duration: 1000,
  //   delay: 150,
  //   distance: '500px',
  //   scale: 1,
  //   easing: 'ease',
  // }

  // useEffect(() => {
  //   function watchScroll() {
  //     window.addEventListener("scroll", onScroll);
  //   }
  //   watchScroll();
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // });

  useEffect(() => {
    AOS.init({ duration: 3000});
  }, []);

  return (
    <section id="section-about" className={styles.section} >
      <div className="title" data-aos="fade-up">
        <h2><span>01.</span> About me</h2>   
      </div>
      <div className="content">
        <p data-aos="fade-up" data-aos-delay= "1000">I'm currently a freelance data manager for a startup named Pandascore, building things in esport and I'm also a freelance front end developer. I am an alumni of school 42 in Paris where I did a 6 month internship in a start up company named Sylphe as a developer. I learned to be resourceful and autonomous. Google is now my best friend </p>
        {/* <p data-aos="fade-up" data-aos-delay= "1300">I learned to be resourceful and autonomous. Google is now my best friend</p> */}
        <p data-aos="fade-up" data-aos-delay= "1600">If you don't find me in front of my lines of code. You may see me during a chess game, a hike in the forest or skateboarding.</p>
      </div>
    </section>
  )
}
