import { Nav, NavLink, Bars, NavMenu } from "./NavBarElements";

const Navbar = () => {
  return (
    <Nav className="navbar">
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/home" activestyle>
          Home
        </NavLink>
        <NavLink to="/WorkExperience" activestyle>
          Work Experience
        </NavLink>
        <NavLink to="/Projects" activestyle>
          Projects
        </NavLink>
        <NavLink to="/Contact" activestyle>
          Contact Me
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
