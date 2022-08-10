import React from 'react'
import {useState, useContext, useEffect} from 'react'
import AuthContext from '../context/AuthContext'
import Cookies from 'js-cookie'

function ProfileSettings() {
  let {user, authTokens} = useContext(AuthContext)
  const csrftoken = Cookies.get('csrftoken');


  const [settingsObj, setSettingsObj] = useState({
    bio : '',
    location: '',
    //profile_img:null,
  })

  let createProfile = async () => {
    console.log("createProfile function")
    let response = await fetch('http://192.168.0.105:8000/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
    },
    body:JSON.stringify(settingsObj)
    })
    let data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    createProfile()
  }, [])
  

  function handleChange(event){
    //e.preventDefault()
    console.log('handle change')
    let {name, value} = event.target

    setSettingsObj(settingsObj => ({
      ...settingsObj,
      [name] : value
    }))
    console.log(settingsObj)

  }

  function handleSubmit(e){
    console.log('settings submit, PUT METHOD')
    fetch("http://192.168.0.105:8000/api/profile", {
      method: "PUT",
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access),
      },
      body:JSON.stringify(settingsObj)
    })
  }


  return (
    <div className="settings">
        <div className="settings--content">
            <div className="settings--logo">
                <img src="team.png" alt="" />
                <h1>ITeam Up</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="bio" placeholder="Bio"/>
                <input type="text" onChange={handleChange} name="location"placeholder="Location"/>
                {/*<input type="file" onChange={handleChange} name="profile_img" accept="image/*"/>*/}
                <input type="submit" value="Submit"/>
            </form>
        </div>
        
    </div>
  )
}

export default ProfileSettings
