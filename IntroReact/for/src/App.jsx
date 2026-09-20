import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg' 
import viteLogo from './assets/vite.svg'
import './App.css'
import Calculator from './Calculator'
function App() {
   const [board, setBoard] = useState(Array(9).fill(""));

  function handleClick(index) {
    const newBoard = [...board];

    newBoard[index] = "X";

    setBoard(newBoard);
  }
  
  return (
    <div>
      <h1>Tic Tac Toe</h1>

      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
   
  )
}

export default App
