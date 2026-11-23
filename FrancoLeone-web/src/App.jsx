import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [language, setLanguage] = useState('es')

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
    </>
  )
}

export default App