import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import {BrowserRouter, Routes, Route, Link, Router} from "react-router-dom";
import Home from './Components/Home';
import Skills from './Components/Skills';
import Experince from './Components/Experince';
import Education from './Components/Education';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path= "/skills" element={<Skills />}/>
        <Route path= "/experince" element={<Experince />}/>
        <Route path= "/education" element={<Education />}/>
        <Route path= "/about" element={<About />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
