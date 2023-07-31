import { useState } from 'react'
import './App.css'
import phrase from './db/phrases.json'
import { getRandom } from './utils/random'


function App() {
  const [phrases, setPhrase] = useState(getRandom(phrase))



  return (
    <main>

      
    </main>
  )
}

export default App
