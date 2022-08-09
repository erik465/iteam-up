import {Route,  Routes, useNavigate} from 'react-router-dom';
import {useEffect} from 'react'
import {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({children, ...rest}) => {
    let isAuthenticated = false
    let {user} = useContext(AuthContext)
    let navigate = useNavigate()
   

    useEffect(() =>{
        if(user){
            isAuthenticated = true
        }
        //if(!isAuthenticated){
        //    navigate('/register')
        //}   
    }, [])
     
    return (
        <Routes>
            <Route {...rest}>{children}</Route>
        </Routes>
    )
}

export default PrivateRoute