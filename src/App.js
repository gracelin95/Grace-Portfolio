import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//component imports
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";

import Banner from "./assets/Banner.png";

//Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Routes>
          <Route path="/projects" component={Projects} />
          <Route path="/workexperience" component={WorkExperience} />
          <Route path="/contactme" component={Contact} />
        </Routes> */}
        <div className="content">
          <img src={Banner} style={{ width: "100%", position: "relative" }} />
          <div className="icons">
            <a href="https://github.com/gracelin95">
              <FaGithub size={32} style={{ color: "black" }} />{" "}
            </a>
            <a href="https://www.linkedin.com/in/gracesqlin/">
              <FaLinkedin size={32} style={{ color: "black" }} />
            </a>
          </div>
          <h1>Projects</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
