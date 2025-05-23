import './App.css'
import { useState } from 'react'
import Background from './components/background'
import Start from './components/Start'
import Customize from './components/Customize'
import Footer from './components/Footer'
import Game from './components/Game'

function App() {
  const [stage,setStage] = useState("start")
  const [emojis, setEmojis] = useState({ player1: '', player2: '' });

  stage === "proceed" ? console.log(emojis) : null

  return (
    <div className='app'>
      <Background />
      {
        (stage === "start") ? 
        <Start state={setStage} /> : 
        (stage === "customize") ?
        <Customize state={setStage} emos={emojis} setEmos={setEmojis} /> :
        <Game />
      }
      <Footer />
    </div>
  )
}

export default App
