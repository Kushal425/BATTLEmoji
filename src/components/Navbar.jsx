import React from 'react'
import "./style.css"

function Navbar({state, setEmos}) {

  return (
    <nav className='navbar'>
        <div>
            <button className='n-button' onClick={() => {
                state("start")
                setEmos({ player1: '', player2: '' })
            }}>
                Home
            </button>
            <button className='n-button' onClick={() => {
                state("customize")
                setEmos({ player1: '', player2: '' })
            }}>
                Customize
            </button>
        </div>
    </nav>
  )
}

export default Navbar