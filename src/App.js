import "./App.css";

//component imports
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>My Portfolio</h1>
      </div>
    </div>
  );
}

export default App;
