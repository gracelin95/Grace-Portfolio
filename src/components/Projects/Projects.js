//Project Image Imports
import Oishii from "../../assets/Projects/Oishii.png";
import Bizarr from "../../assets/Projects/bizarr.png";

//Material Ui Imports
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";

const Projects = () => {
  return (
    <div>
      {/* <Card>
        <CardMedia component="img" image="Oishii.png" alt="oishii" />
      </Card> */}
      <div className="project-img">
        <img src={Oishii} width="50%" className="oishii" />
        <img src={Bizarr} width="50%" className="bizarr" />
      </div>
    </div>
  );
};

export default Projects;
