import React, {useState, useEffect} from 'react'

import styles from '../styles/Nav.module.css'

export default function Nav() {

  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false)
  const handleMenu = () => {
    setShow(prevshow => !prevshow)
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        setFixed(true)
      }
    })
  })


  return (
    <nav className={fixed ? styles.fixed : ''}
    >
      <div className={styles.logo}>
        <p className='fade-in'>Florian Gazeau</p>
      </div>
      <div className={show ? styles.sidenav : styles.menu}>
        {show ? <img src='/cancel.png' alt="" onClick={handleMenu}/> : ''}
        <ul>
          <li className='fade-in'><a href="#section-about">About</a></li>
          <li className='fade-in'><a href="#section-experiences">Experiences</a></li>
          <li className='fade-in'><a href="#section-skills">Skills</a></li>
          <li className='fade-in'><a href="#section-works">Projects</a></li>
          <li className='fade-in'><a href="#section-contact">Contact</a></li>
        </ul>
      </div>
      <div className={styles.hamburger}>
        <img src='/menu.png' alt="" onClick={handleMenu}/>
      </div>
    </nav>
  )
}
