import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import file from "../images/resume.jpg";
import image from "../images/person.png";
import { Link } from "react-router-dom";
import { useAppProvider } from "../context";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";

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
      <div className='container about-container'>
        <Navbar />
        <hr />
        <Sidebar />
        <Row className='about-content'>
          <Col>
            <h2>About Me</h2>
            <p>
              I am a self taught frontend developer, a lady working towards
              significant self development, a passionate and dedicated web
              developer and programmer.I am currently skilled in HTML,CSS and
              JavaScript and i working towards incremental knowledge and skill
              acquisition in web development and other interesting programming
              languages.
            </p>
            <p>
              <b>Education: </b>I am a undergraduate of Computer Engineering at{" "}
              <abbr title='Ladoke Akintola University of Technology'>
                LAUTECH
              </abbr>
              .
            </p>
            <Button variant='outline-primary' className='btn'>
              <Link to='/contact'>Hire Me</Link>
            </Button>
            <Button variant='outline-primary' className='btn'>
              <a href={file} download>
                Download CV
              </a>
            </Button>
          </Col>
          <Col>
            <img src={image} alt='' />
          </Col>
        </Row>
        <h3>Skills</h3>
        <div className='skills-content'>
          <Row>
            <Col className='skill'>
              <h4>HTML</h4>
            </Col>
            <Col className='skill'>
              <h4>CSS</h4>
            </Col>
          </Row>
          <Row>
            <Col className='skill'>
              <h4>JavaScript</h4>
            </Col>
            <Col className='skill'>
              <h4>React</h4>
            </Col>
          </Row>
        </div>
        <h5 className='footer'>
          Copyright &copy; {new Date().getFullYear()}. All rights reserved
        </h5>
      </div>
    </section>
  );
}

export default About;
