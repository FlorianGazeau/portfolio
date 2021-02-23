import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact/Contact'
import Experiences from '../components/Experiences'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Works from '../components/Works'

export default function Home() {

  const handleScroll = () => {
    console.log('yes')
  }
  
  return (
    <div onScroll={handleScroll}>
      <Hero/>
      <About />
      <Experiences />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}
