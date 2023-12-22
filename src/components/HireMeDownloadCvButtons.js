import React from "react";
import file from "../images/resume.jpg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HireMe_DownloadCV_Buttons = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/contact");
  };

  return (
    <>
      <Button
        variant="outline-primary"
        className="btn"
        onClick={navigateHandler}
      >
        Hire Me
      </Button>
      <Button variant="outline-primary" className="btn" href={file} download>
        Download CV
      </Button>
    </>
  );
};
export default HireMe_DownloadCV_Buttons;
