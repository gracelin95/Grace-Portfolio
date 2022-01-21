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
        <Routes>
          <Route path="/projects" exact component={Projects} />
        </Routes>
        <div className="content">
          <img src={Banner} style={{ width: "100%", position: "relative" }} />
          <div
            className="icons"
            style={{
              // position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaGithub size={35} src="https://github.com/gracelin95" />{" "}
            <FaLinkedin
              size={35}
              src="https://www.linkedin.com/in/gracesqlin/"
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
