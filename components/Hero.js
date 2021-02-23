import React from 'react'
import Nav from './Nav'
import { FaGithub, FaTwitter, FaLinkedin, FaCodepen,FaInstagram } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section id='hero-section'>
      <Nav />
      <div className={styles.hero}>
        <div className={styles.box}>
          <h2>Hi, my name is</h2>
          <h1>Florian Gazeau.<br />I'm Front End Developer.</h1>
          <button className={styles.btn}>
            <a href="#section-contact">Work with me</a>
            <BsArrowRight />
          </button>
        </div>
        <div className={styles.box}>
          <a href="https://github.com/FlorianGazeau">
            <FaGithub />
          </a>
          <a href="https://twitter.com/FlorianGazeau">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/flgazeau/">
            <FaLinkedin />
          </a>
          <a href="https://codepen.io/floriangazeau">
            <FaCodepen />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  )
}
