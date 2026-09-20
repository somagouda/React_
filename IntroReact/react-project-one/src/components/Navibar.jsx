import React from 'react'
import './Navibar.css'
import { Link } from 'react-router-dom'

function Navibar() {
  return (
    <div>
      <nav className="navbar">

        <h2>My Website</h2>

        <div className="nav-links">

          <button id="btn1">Home</button>

          <button id="btn2">About</button>

          <button id="btn3">Contact</button>

          <Link to="/login">
            <button id="btn4">Login</button>
          </Link>

        </div>

      </nav>
    </div>
  )
}

export default Navibar