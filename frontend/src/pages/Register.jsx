import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


function Register() {
  const navigate = useNavigate()
  const [userObj, setUserObj] = useState({
    username:'', 
    email:'', 
    password:'',
    confirmPass:''
  })

  const [error, setError] = useState('')


  function validateForm(){
    if(userObj.username == ''){
      setError('Please enter a username')
      return false
    }
    if(userObj.email == ''){
      setError('Please enter a email')
      return false
    }
    if(userObj.password == ''){
      setError('Please enter a password')
      return false
    }
    if(userObj.confirmPass == ''){
      setError('Please confirm your password')
      return false
    }
    return true
  }
  

  function handleChange(event){
    console.log('handle change')
    let {name, value, } = event.target

    setUserObj(userObj => ({
      ...userObj,
      [name] : value
    }))

  }


  let handleSubmit = async (e) => {
    e.preventDefault()
    if(validateForm()){
      if(userObj.password === userObj.confirmPass){
        let response = await fetch("http://127.0.0.1:8000/api/users", {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify(userObj)
        })
        response = await response.json()
        setError(response.message)
        if(response.message === "Successful register!"){
          setTimeout(navigate("/"), 1000)          
        }
         
      }
      else{
        setError("Passwords do not match")
      }
      
    }
  }
    
  
  


  return (
    <div className="register">
        <div className="register--content">
            <div className="register--logo">
                <img src="team.png" alt="" />
                <h1>ITeam Up</h1>
            </div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <input onChange={handleChange} name="username" type="text" placeholder="Username" value={userObj.username}/>
                <input onChange={handleChange} name="email" type="email" placeholder="Email" value={userObj.email}/>
                <input onChange={handleChange} name="password" type="password" placeholder="Password" value={userObj.password}/>
                <input onChange={handleChange} name="confirmPass" type="password" placeholder="Confirm password" value={userObj.confirmPass}/>
                <input type="submit" value="Register"/>
                <p className={error === 'Successful register!' ? "register--message succes" 
                : "register--message error"}>{error}</p>
            </form>
        </div>
        
    </div>
  )
}

export default Register
