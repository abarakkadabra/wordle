import React, { useContext } from 'react'
import { AppContext } from '../App';

function GameOver() {

  const { gameOver, currAttempt, correctWord } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3> {gameOver.guessedWord ? "You guessed the word" : "You failed"} </h3>
      <h1>Correct word is {correctWord}</h1>
      {gameOver.guessedWord && <h3>You guessed in {currAttempt.attempt} attempts</h3>}
      <a href="."><h1>NEW GAME</h1></a>
    </div>
  )
}

export default GameOver