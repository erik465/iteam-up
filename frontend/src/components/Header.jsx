import React from 'react'

function Header() {
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
            <a href="/register">Register</a>
        </div>   
    </header>
  )
}

export default Header
