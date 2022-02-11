import "./aboutme.css";

const Aboutme = () => {
  return (
    <div className="main-div">
      <div className="aboutme-header">About Me</div>
      <div className="about-me-desc">
        <div className="child-div">
          <p> Hello there! I'm Grace. 👋🏼</p>
          <br />
          <p>
            I'm a Fullstack Software Engineer and a recent graduate of Fullstack
            Academy's Grace Hopper Program. Prior to my transition, I worked in
            the insurance field as a Bodily Injury negotiator.
          </p>
          <br />
          <p>
            {" "}
            I decided to transition into programming when I attended Fullstack's
            Demo Day and was absolutely amazed by how so many different projects
            can be created with just a laptop and a keyboard. And this is when I
            decided to start my journey. I'm excited to continue building more
            projects and continue learning all the endless knowledge there is
            out in the programming world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
