import { useReveal } from './hooks/useReveal'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Particles from './components/Particles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Languages from './components/Languages'
import Process from './components/Process'
import Marquee from './components/Marquee'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <Particles />
      <div className="noise" aria-hidden="true" />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Languages />
        <Process />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
