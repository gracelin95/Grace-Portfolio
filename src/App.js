import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//component imports
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";

import Banner from "./assets/Banner-centered.png";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/projects" exact component={Projects} />
        </Routes>
        <div className="content">
          <img src={Banner} style={{ width: "100%" }} />
        </div>
      </div>
    </Router>
  );
}

export default App;
