import './App.css'
import { useState } from 'react'
import Background from './components/background'
import Start from './components/Start'
import Customize from './components/Customize'
import Footer from './components/Footer'
import Game from './components/Game'

function App() {
  const [stage,setStage] = useState("start")
  const [categories, setCategories] = useState({ player1: '', player2: '' });
  const [emojis, setEmojis] = useState({ player1: '', player2: '' });

  return (
    <div className='app'>
      <Background />
      {
        (stage === "start") ? 
        <Start state={setStage} /> : 
        (stage === "customize") ?
         <Customize state={setStage} emos={emojis} setEmos={setEmojis} categos={categories} setCategos={setCategories} /> :
          <Game />
      }
      <Footer />
    </div>
  )
}

export default App
