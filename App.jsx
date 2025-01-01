import Die from "./Die";
import React from "react";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";

export default function App() {
  const [dice, setDices] = React.useState(() => generateAllNewDice());
  let gameWon = false;
  if (
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value)
  ) {
    gameWon = true;
  }

  function generateAllNewDice() {
    let arrayDice = [];
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      arrayDice.push({ value: randomNumber, isHeld: false, id: nanoid() });
    }
    return arrayDice;
  }
  function rollDice() {
    setDices((oldDice) =>
      oldDice.map((die) =>
        !die.isHeld || gameWon
          ? { ...die, value: Math.floor(Math.random() * 6) + 1, isHeld: false }
          : die
      )
    );
  }

  function hold(id) {
    setDices((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      hold={() => {
        hold(die.id);
      }}
    />
  ));

  return (
    <main>
      {gameWon && <ReactConfetti />}

      <div className="game-container">
        <h1>Tenzies</h1>
        <p>
          Roll until all dices are the same. Click each die to freeze it at its
          current value between rolls
        </p>
        <div className="grid-layout">{diceElements}</div>
        <button onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
      </div>
    </main>
  );
}
