// import { Nav, NavLink, Bars, NavMenu } from "./NavBarElements";
import "./navbar.css";
import Logo from "../../assets/Logo/GrayLogo.png";
import { links } from "../../data";

//React Imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logoBox: {
    flexGrow: 15,
  },
  logo: {
    height: 70,
    marginRight: 10,
    marginLeft: -30,
    marginBottom: 10,
  },
  menuButton: {
    color: "black",
    display: "block",
    position: "absolute",
    top: 0,
    right: 0,
  },
  projects: {
    flexGrow: 0.5,
    color: "black",
    fontSize: 13,
    marginBottom: 10,
  },
  work: {
    flexGrow: 0.5,
    color: "black",
    fontSize: 13,
    marginBottom: 10,
  },
  contact: {
    flexGrow: 0.5,
    color: "black",
    fontSize: 13,
    marginBottom: 10,
  },
  appBarTransparent: {
    backgroundColor: "rgba(255,255,255,0.5)",
    height: 50,
  },
  appBarSolid: {
    backgroundColor: "#F1D8C6",
  },
}));

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location,
    });
  };
  const classes = useStyles();

  //to control the state of the navbar color
  const [navBackground, setNavBackground] = useState("appBarTransparent");

  const navRef = React.useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <AppBar position="fixed" className={classes.appBarTransparent}>
        <ToolBar>
          <div className={classes.logoBox}>
            <Box component="img" className={classes.logo} src={Logo} />
          </div>
          <div>
            {links.map((link) => {
              return (
                <a href={link.url} key={link.id} onClick={handleClick}>
                  {link.text}
                </a>
              );
            })}
          </div>
          {/* <Button
            component={Link}
            to="/Projects"
            variant="h6"
            className={classes.projects}
          >
            Projects
          </Button> */}
          {/* <Button variant="h6" className={classes.projects} href="/projects">
            Projects
          </Button>
          <Link to="/Projects" style={{ textDecoration: "none" }}>
            <Button variant="h6" className={classes.projects}>
              Projects
            </Button>
          </Link> 
          {/* <Link to="/workexperience" style={{ textDecoration: "none" }}> */}
          {/* <Button variant="h6" className={classes.work} url="#work">
            {" "}
            Work Experience
          </Button>
          {/* </Link> */}
          {/* <Link to="/contactme" style={{ textDecoration: "none" }}>
            <Button variant="h6" className={classes.contact}>
              {" "}
              Contact Me
            </Button> */}
          {/* </Link> */}

          <IconButton className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
        </ToolBar>
      </AppBar>
    </div>
    // <Nav className="navbar">
    //   <NavLink to="/">
    //     <h1>Logo</h1>
    //   </NavLink>
    //   <Bars />
    //   <NavMenu>
    //     <NavLink to="/home" activestyle>
    //       Home
    //     </NavLink>
    //     <NavLink to="/WorkExperience" activestyle>
    //       Work Experience
    //     </NavLink>
    //     <NavLink to="/Projects" activestyle>
    //       Projects
    //     </NavLink>
    //     <NavLink to="/Contact" activestyle>
    //       Contact Me
    //     </NavLink>
    //   </NavMenu>
    // </Nav>
  );
};

export default Navbar;
