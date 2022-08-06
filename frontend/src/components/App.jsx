import Header from './Header'
import Footer from './Footer'
import ExplorePage from '../pages/ExplorePage'
import Register from '../pages/Register'
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
        <Routes>
          <Route path={!"/register"} element={<Header />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>  
    )
}

export default App
