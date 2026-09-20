import './App.css'
import Counter from './components/counter'
import React from 'react'
import Navibar from './components/Navibar'
import Login from './components/login'
import { Routes, Route } from 'react-router-dom'
import Cards from './components/cards'
import Button from './components/Button'  
function App() {
  const[name,setname] = React.useState("");
 
  return (
    <div>
        
       <Counter name={name} setname={setname}/>



      
    </div>
  )
}
export default App

