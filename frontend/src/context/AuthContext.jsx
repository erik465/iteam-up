import {createContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'



const csrftoken = Cookies.get('csrftoken');


const AuthContext = createContext()
export default AuthContext;





export const AuthProvider = ({children}) => {
    let navigate = useNavigate()

    
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    let loginUser = async(e) => {
        let response = await fetch('http://192.168.0.105:8000/api/token/',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body:JSON.stringify({'username':e.target.username.value, 'password': e.target.password.value})
        })
        let data = await response.json()
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            console.log('login successful')
        }else{
            alert('Something went wrong!')
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/')
    } 

    let contextData = {
        user:user,
        loginUser: loginUser,
        logoutUser: logoutUser ,
        authTokens: authTokens
    };

    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}