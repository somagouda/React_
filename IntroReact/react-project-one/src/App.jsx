import './App.css'
import Counter from './components/counter'
import React from 'react'
import Navibar from './components/Navibar'
import Login from './components/login'
import { Routes, Route } from 'react-router-dom'
import Cards from './components/cards'
import Button from './components/Button'  
import Loginn from './components/Loginn'
import Logout from './components/Logout'
function App() {
 const[loggedIn,setLoggedIn]=React.useState(false);
 
  return (
    <div>
      {loggedIn ? (
        <Loginn/>
      ) : (
        <Logout/>
      )}
    </div>
  )
}
export default App


      
      



      
 
