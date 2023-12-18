import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router-dom";
// import file from "../images/resume.jpg";
import image from "../images/hero.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { useAppProvider } from "../context";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import HireMeDownloadCvButtons from "../components/HireMeDownloadCvButtons";

function Home() {
  // const navigate = useNavigate();
  // // const navigateHandler = () => {
  // //   navigate("/contact");
  // // };

  let text =
    "I am a self taught frontend developer, a lady working towards significant self development, a passionate and dedicated web developer and programmer. I also enjoy working with people to create user friendly websites.";
  const { loading, lightmode } = useAppProvider();
  const [substring, setSubstring] = useState(30);

  useEffect(() => {
    setTimeout(() => {
      setSubstring((oldString) => {
        let newString = oldString + 1;
        if (oldString === text.length) {
          newString = 1;
        }
        return newString;
      });
    }, 100);
  }, [substring]);
  if (loading) {
    return <Modal />;
  }
  return (
    <section
      className={`${
        lightmode ? "home-section section light-mode" : "home-section section"
      }`}
    >
      <div className="home-container container">
        <Navbar />
        <hr />
        <Sidebar />

        <Row className="home-content">
          <Col className="home-info">
            <h1>I'm Fasina Ayomikun</h1>
            <p>{text.substring(0, substring)}|</p>
            {/* <Button
              variant="outline-primary"
              className="btn"
              onClick={navigateHandler}
            >
              Hire Me
            </Button>
            <Button
              variant="outline-primary"
              className="btn"
              href={file}
              download
            >
              Download CV
            </Button> */}
            <HireMeDownloadCvButtons />
          </Col>
          <Col>
            <img src={image} alt="" />
          </Col>
        </Row>
      </div>

      <div className="social-icons">
        <a href="https://github.com/Fasina-ayomikun" target="blank">
          <FaGithubSquare />
        </a>
        <a
          href="https://www.youtube.com/channel/UClog1_6iQNgYEDlAwbH6CYA"
          target="blank"
        >
          <FaYoutubeSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/ayomikun-fasina-b791ab225"
          target="blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Home;
