import Header from './Header'
import Footer from './Footer'
import ExplorePage from '../pages/ExplorePage'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/"  element={<ExplorePage />}/>
        </Routes>
      <Footer />
    </Router>  
    )
}

export default App
