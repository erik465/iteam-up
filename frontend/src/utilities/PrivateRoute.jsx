import {Route,  Routes, useNavigate} from 'react-router-dom';
import {useEffect} from 'react'

const PrivateRoute = ({children, ...rest}) => {
    const isAuthenticated = false
    const navigate = useNavigate()

    useEffect(() =>{
        if(!isAuthenticated){
            navigate('/register')
        }   
    }, [])
     
    return (
        <Routes>
            <Route {...rest}>{children}</Route>
        </Routes>
    )
}

export default PrivateRoute