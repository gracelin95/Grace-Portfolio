import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//component imports
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Tech from "./components/Tech/Tech";
import Contact from "./components/Contact/Contact";

import Banner from "./assets/Banner.png";

//Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Routes>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/workexperience" component={WorkExperience} />
          <Route exact path="/contactme" component={Contact} />
        </Routes> */}
        <div className="content" id="home">
          <img src={Banner} style={{ width: "100%", position: "relative" }} />
          <div className="icons">
            <a href="https://github.com/gracelin95">
              <FaGithub size={32} style={{ color: "black" }} />{" "}
            </a>
            <a href="https://www.linkedin.com/in/gracesqlin/">
              <FaLinkedin size={32} style={{ color: "black" }} />
            </a>
          </div>
          <section id="projects">
            <Projects />
          </section>
          <section id="tech">
            <Tech />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
