import { useState } from 'react'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Stack from './components/Stack.jsx'

function App() {
  const [language, setLanguage] = useState('es')

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="flex-1">
        <Hero language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Stack language={language} />
        <Projects language={language} />
        <About language={language} />
      </main>
      <Footer language={language} />
    </>
  )
}

export default App