import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//component imports
import Navbar from "./components/Navbar/Navbar";
import Aboutme from "./components/Aboutme/Aboutme";
import Projects from "./components/Projects/Projects";
import Tech from "./components/Tech/Tech";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Banner from "./assets/Banner.png";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content" id="home">
          <img src={Banner} style={{ width: "100%", position: "relative" }} />
          <section id="aboutme">
            <Aboutme />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="tech">
            <Tech />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
