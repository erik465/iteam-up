import React from 'react'
import {useContext} from 'react'
import AuthContext from '../context/AuthContext'

function Header() {
  let {user} = useContext(AuthContext)
  let {logoutUser} = useContext(AuthContext)
  let styles = {
    cursor : 'pointer',
  }
  return (
    <header>
        <div className="header--logo">
          <img src='team.png' alt="team" className="header--logo--img" />
        </div>
        <div className="header--links">
          <a href={`${user.name}/profile`}>Me</a>
          <a>Explore</a>
          <a>Friends</a>
          <a>Contacts 🤔</a>
        </div>    

        <div className="header--profile">
            {user ? <p>Welcome, {user.name}</p> : <a href="/login">Log in</a>}
            {user && <p onClick={logoutUser} style={styles}>Logout</p>}
        </div>   
        
    </header>
  )
}

export default Header
