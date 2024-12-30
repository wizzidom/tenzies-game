import Die from "./Die";
import React from "react";

export default function App() {
  function generateAllNewDice() {
    let arrayDice = [];
    for (let i = 0; i < 10; i++) {
      arrayDice[i] = Math.floor(Math.random() * 6) + 1;
    }
    return arrayDice;
  }

  const [dice, setDices] = React.useState(generateAllNewDice());
  const diceElements = dice.map((die) => <Die value={die} />);
  return (
    <main>
      <div className="game-container">
        <div className="grid-layout">{diceElements}</div>
      </div>
    </main>
  );
}
