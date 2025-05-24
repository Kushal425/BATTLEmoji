# BATTLEmoji

**BATTLEmoji** is a modern twist on the classic Tic Tac Toe game, featuring emojis and a unique vanishing rule that keeps the gameplay dynamic and engaging.

---

## Game Rules

1. Each player starts by choosing their favorite emoji category.
2. Players then select an emoji from their chosen category.
3. Players take turns placing their emojis on the board.
4. **Vanishing Rule**: Each player can have only 3 emojis on the board at any time. Placing a 4th emoji removes the oldest emoji automatically.
5. Players can only place their emoji in an empty cell.
6. Form a line of 3 emojis (horizontally, vertically, or diagonally) to win.
7. The first player to align 3 emojis in a row wins the game.
8. Use the "Play Again" button to restart the game anytime.

---

## Features

* **Emoji Selection**: Players can choose their favorite emoji categories and emojis.
* **Vanishing Rule**: Keeps the board dynamic by automatically removing the oldest emoji when placing a 4th one.
* **Responsive Design**: Enjoy seamless gameplay on desktop and mobile devices.
* **Turn Indicators**: Clearly displays which player's turn it is.
* **Winner Announcement**: Highlights the winner with a clear message and visual feedback.
* **Play Again Option**: Reset the game with a single click to start fresh.

---

## Tech Stack Used

* **React.js**: For building an interactive and dynamic user interface.
* **CSS**: For creating responsive and visually appealing designs.
* **JavaScript**: For implementing the game logic, including the vanishing rule and winner detection.

---

## The Vanishing Rule: How It Works

The vanishing rule ensures that each player can have a maximum of 3 emojis on the board at any time:

1. If a player attempts to place a 4th emoji, their **oldest emoji** on the board is automatically removed.
2. This is implemented using a **FIFO (First In, First Out)** logic:

   * Each player's moves are tracked in an array.
   * When the array reaches 3 emojis and a new emoji is placed, the first emoji in the array is removed.
3. This keeps the board dynamic and prevents overcrowding, adding a layer of strategy to the gameplay.

---
