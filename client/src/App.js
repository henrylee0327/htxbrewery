import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Brewery from './components/Brewery'

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/brewery" element={<Brewery />}/>
      </Routes>
    </Router>
    </>
    
  )
}

export default App;
