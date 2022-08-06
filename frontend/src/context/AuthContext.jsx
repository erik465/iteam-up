import {createContext, useState, useEffect} from 'react';

const AuthContext = createContext()

export default AuthContext;

let [authTokens, setAuthTokens] = useState(null)
let [user, setUser] = useState(null)

let loginUser = async(e) => {
    let response = await fetch('http://127.0.0.1:8000/api/token',
    {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'username':null, 'password': null})
    })
}

let contextData = {
    loginUser: loginUser,
};

export const AuthProvider = ({children}) => {
    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}