import Header from './Header'
import Footer from './Footer'
import ExplorePage from '../pages/ExplorePage'
import Register from '../pages/Register'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {

  return (
    <Router>
        <Routes>
          <Route path={!"/register"} element={<Header />}/>
          <Route path="/"  element={<ExplorePage />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
        <Footer />
    </Router>  
    )
}

export default App
