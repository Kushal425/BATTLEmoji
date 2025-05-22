import "./style.css"

function Start({state}) {

  return (
    <div className="container">
        <h1 className="title">
            Welcome to BATTLEmoji
        </h1>
        <div className="rules">
            <h2>
                Rules
            </h2>
            <ul>
                <li>At first each player chooses there favourite emoji.</li>
                <li>Each player takes turns to place their emoji on the board.</li>
                <li>The first player to get three in a row wins!</li>
                <li>If the board is full and no one has three in a row, it's a draw.</li>
                <li>Have fun and enjoy the game!</li>
            </ul>
        </div>
        <button className="button" onClick={() => state("customize")}>
            Start Game
        </button>
    </div>
  )
}

export default Start