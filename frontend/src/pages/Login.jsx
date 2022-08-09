import AuthContext from '../context/AuthContext'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'


function Login() {
  let {loginUser} = useContext(AuthContext)
  let navigate = useNavigate()
  return (
    <div className="register">
        <div className="login--content">
            <div className="register--logo">
                <img src="team.png" alt="" />
                <h1>ITeam Up</h1>
            </div>
            <form action=""method="post" onSubmit={(e) => {
              e.preventDefault()
              loginUser(e)
              navigate('/')
              }}>
                <input  name="username" type="text" placeholder="Username" />
                <input  name="password" type="password" placeholder="Password" />
                <input type="submit" value="Login"/>
            </form>
        </div>
        
    </div>
  )
}

export default Login