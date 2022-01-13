// import { Nav, NavLink, Bars, NavMenu } from "./NavBarElements";
//React Imports
import React, { useEffect, useState } from "react";

//Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  appBarTransparent: {
    backgroundColor: "rgba(67,129,168,0.5)",
  },
  appBarSolid: {
    backgroundColor: "rgba(67,129,169)",
  },
}));

const Navbar = () => {
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
          <IconButton className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {" "}
            Projects
          </Typography>
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
