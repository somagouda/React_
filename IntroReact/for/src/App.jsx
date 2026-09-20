import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg' 
import viteLogo from './assets/vite.svg'
import './App.css'
import Calculator from './Calculator'
function App() {
  function handleClick() {
    alert('Button clicked!')

  }
  function onmouseover() {
    alert('Mouse over event triggered!')
  }

  return (
    <div>
      <Calculator />
    </div>
   
  )
}

export default App
