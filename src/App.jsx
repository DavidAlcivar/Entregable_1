import { useState } from 'react'
import './App.css'
import phrases from './db/phrase.json'
import { getRandom } from './utils/random'
import GalaxBox from './components/GalaxBox'

const listBg = ['bg1', 'bg2', 'bg3', 'bg4']

function App() {
  const [phrase, setPhrase] = useState(getRandom(phrases))
  const [currentBg, setCurrentBg] = useState(getRandom(listBg))
  const handleButton = () => {
    setPhrase(getRandom(phrases))
    setCurrentBg(getRandom(listBg))

  };


  return (
    <main className={`App ${currentBg}`}>
      <GalaxBox  handleButton = {handleButton } phrase={phrase}/>
      
    </main>
  )
}

export default App
