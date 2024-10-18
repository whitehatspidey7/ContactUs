import React from 'react'
import './Nav.css'

const Nav = () => {
  return (

    <div className='Nav-bar'>
        
        <div className='Nav-logo'>
        <p>SONU</p>
        </div>

        
          <ul>
            <li><a >Home</a></li>
            <li><a>About us</a></li>
            <li><a>Services</a></li>
          </ul>
        

    </div>
  )
}

export default Nav;
