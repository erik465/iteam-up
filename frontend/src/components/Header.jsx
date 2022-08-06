import React from 'react'
import {useContext} from 'react'
import AuthContext from '../context/AuthContext'

function Header() {
  let {name} = useContext(AuthContext)
  return (
    <header>
        <div className="header--logo">
          <img src='team.png' alt="team" className="header--logo--img" />
        </div>
        <div className="header--links">
          <a>Me</a>
          <a>Explore</a>
          <a>Friends</a>
          <a>Contacts 🤔</a>
        </div>    

        <div className="header--profile">
            <p>Welcome, {name}</p>
        </div>   
        
    </header>
  )
}

export default Header
