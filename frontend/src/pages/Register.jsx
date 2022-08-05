import React from 'react'
import Footer from '../components/Footer'

function Register() {
  return (
    <div className="register">
        <div className="register--content">
            <div className="register--logo">
                <img src="team.png" alt="" />
            </div>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm password"/>
                <input type="submit" value="Register"/>
            </form>
            <Footer className="register--footer"/>
        </div>
        
    </div>
  )
}

export default Register
