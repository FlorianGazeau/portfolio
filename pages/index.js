import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Experiences from '../components/Experiences/Experiences'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Skills from '../components/Skills/Skills'
import Works from '../components/Work/Works'

export default function Home() {

  return (
    <div>
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
