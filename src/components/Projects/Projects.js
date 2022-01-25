//CSS import
import "./project.css";

//Project Image Imports
import Oishii from "../../assets/Projects/Oishii.png";
import Bizarr from "../../assets/Projects/bizarr.png";

//Material Ui Imports
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";

const Projects = () => {
  return (
    <div>
      <h2 className="headline"> Projects </h2>
      <div className="project-imgs">
        <a
          href="https://github.com/Winternet-is-coming/GraceShopper"
          target="_blank"
        >
          <img src={Oishii} className="oishii-img" />
        </a>
        <a
          href="https://github.com/04-cs-2109-compoutine/Bizarr"
          target="_blank"
        >
          <img src={Bizarr} className="bizarr-img" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
