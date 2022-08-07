import Header from './Header'
import Footer from './Footer'
import ExplorePage from '../pages/ExplorePage'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ProfilePage from '../pages/ProfilePage'
import {useState, useEffect} from 'react'
import PrivateRoute from '../utilities/PrivateRoute'
import {AuthProvider} from '../context/AuthContext'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {


  return (
    <Router>
      <AuthProvider>      
        <PrivateRoute path="/"  element={<ExplorePage />} exact/>
        <Header />
        <Routes>
          <Route path="/:uid" element={<ProfilePage />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login /> }/>
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>  
    )
}

export default App
