import Head from 'next/head'
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
      <Head>
        <title>Florian Gazeau</title>
        <meta property="og:title" content="Florian Gazeau" key="title" />
      </Head>
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
