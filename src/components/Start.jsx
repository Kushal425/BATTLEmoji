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
                <li>Each player starts by choosing their favorite category.</li>
                <li>Players then select an emoji from their chosen category.</li>
                <li>Once both players have selected their emoji, click "Proceed" to start the game.</li>
                <li>Each player can have only 3 emojis on the board at any time.</li>
                <li>If you place a 4th emoji, your oldest emoji will disappear automatically.</li>
                <li>Players take turns placing their emoji on any empty cell.</li>
                <li>Form a line of 3 emojis horizontally, vertically, or diagonally to win.</li>
                <li>The first player to align 3 emojis in a row wins the game!</li>
                <li>Click "Play Again" to restart the game anytime.</li>
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