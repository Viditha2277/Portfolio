import React from "react";
import Main from "./Components/Main";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import Skills from "./Components/Skills";
import Eca from "./Components/Eca";
import Git from "./Components/Git";
import Experience from "./Components/Experience";
import Secret from "./Components/Secret";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<Main />} />

          <Route path="/home" element={<Home />} />

          <Route path="/education" element={<Education />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/certifications" element={<Certifications />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/eca" element={<Eca />} />

          <Route path="/git" element={<Git />} />

          <Route path="/experience" element={<Experience />} />

          <Route path="/secret" element={<Secret />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
