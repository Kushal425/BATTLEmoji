import './App.css'
import { useState } from 'react'
import Background from './components/background'
import Start from './components/Start'
import Customize from './components/Customize'
import Footer from './components/Footer'
import Game from './components/Game'
import Navbar from './components/Navbar'

function App() {
  const [stage,setStage] = useState("start")
  const [emojis, setEmojis] = useState({ player1: '', player2: '' });

  return (
    <div className='app'>
      <Background />
      <Navbar state={setStage} setEmos={setEmojis} />
      {
        (stage === "start") ? 
        <Start state={setStage} /> : 
        (stage === "customize") ?
        <Customize state={setStage} emos={emojis} setEmos={setEmojis} /> :
        <Game p1={emojis.player1} p2={emojis.player2} />
      }
      <Footer />
    </div>
  )
}

export default App
