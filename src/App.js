import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//component imports
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";

import Banner from "./assets/Banner.png";

//material ui
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/styles";

function App() {
  // const THEME = createMuiTheme({
  //   typography: {
  //     fontFamily: `'Sora', sans-serif`,
  //     fontSize: 13,
  //     fontWeightLight: 300,
  //     fontWeightRegular: 400,
  //     fontWeightMedium: 500,
  //   },
  // });

  return (
    // <MuiThemeProvider theme={THEME}>
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
    // </MuiThemeProvider>
  );
}

export default App;
