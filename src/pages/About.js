import React from "react";
import { Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import image from "../images/person.png";
import { useAppProvider } from "../context";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import HireMeDownloadCvButtons from "../components/HireMeDownloadCvButtons";

function About() {
  const { lightmode, loading } = useAppProvider();
  if (loading) {
    return <Modal />;
  }
  return (
    <section
      className={`${
        lightmode ? "about-section section light-mode" : "section about-section"
      }`}
    >
      <div className="container about-container">
        <Navbar />
        <hr />
        <Sidebar />
        <Row className="about-content">
          <Col>
            <h2>About Me</h2>
            <p>
              I am a self taught frontend developer, a lady working towards
              significant self development, a passionate and dedicated web
              developer and programmer. I am currently skilled in HTML,CSS and
              JavaScript and i working towards incremental knowledge and skill
              acquisition in web development and other interesting programming
              languages.
            </p>
            <HireMeDownloadCvButtons />
          </Col>
          <Col>
            <img src={image} alt="" />
          </Col>
        </Row>
        <h3>Skills</h3>
        <div className="skills-content">
          <Row>
            <Col className="skill">
              <h4>HTML</h4>
            </Col>
            <Col className="skill">
              <h4>CSS</h4>
            </Col>
            <Col className="skill">
              <h4>JavaScript</h4>
            </Col>
          </Row>
          <Row>
            <Col className="skill">
              <h4>Typescript</h4>
            </Col>
            <Col className="skill">
              <h4>React</h4>
            </Col>
            <Col className="skill">
              <h4>NextJs</h4>
            </Col>
          </Row>
          <Row>
            <Col className="skill">
              <h4>NodeJs</h4>
            </Col>
            <Col className="skill">
              <h4>Express</h4>
            </Col>
            <Col className="skill">
              <h4>MongoDB</h4>
            </Col>
          </Row>
        </div>
        <h5 className="footer">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved
        </h5>
      </div>
    </section>
  );
}

export default About;
