import Header from './Header'
import Footer from './Footer'
import ExplorePage from '../pages/ExplorePage'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ProfileSettings from '../pages/ProfileSettings'
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
        <Header />
        <PrivateRoute path="/"  element={<ExplorePage />} exact/>
        <Routes>
          <Route path="/:uid" element={<ProfilePage />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login /> }/>
          <Route path="/settings" element={<ProfileSettings/>}/>
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>  
    )
}

export default App
