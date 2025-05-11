import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Herosection from './components/HeroSection/Herosection'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import ContactForm from './components/ContactForm/ContactForm'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <About/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <ContactForm/>
    </div>
  )
}

export default App
