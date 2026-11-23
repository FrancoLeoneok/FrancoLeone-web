import { useState } from 'react'
import Experience from './components/Experience.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [language, setLanguage] = useState('es')

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="flex-1">
        <Hero language={language} />
        <Experience language={language} />
      </main>
    </>
  )
}

export default App