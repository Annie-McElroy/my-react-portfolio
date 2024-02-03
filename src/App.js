import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Nav from './components/NavBar';
import Foot from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <div>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/about"
              element={<About />}
            />
            <Route 
              path="/projects"
              element={<Projects />}
            />
            <Route 
              path="/resume"
              element={<Resume />}
            />
          </Routes>
        </div>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
