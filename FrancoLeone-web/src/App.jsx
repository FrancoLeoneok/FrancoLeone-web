import { useState } from 'react'
import Navbar from './components/Navbar.jsx'

function App() {
  const [language, setLanguage] = useState('es')

  return <Navbar language={language} onLanguageChange={setLanguage} />
}

export default App