import React from "react";
import Navbar from "../components/Navbar";
import { Button, Row, Col } from "react-bootstrap";
import { projects } from "../data";
import { useAppProvider } from "../context";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
function Projects() {
  const { lightmode, loading } = useAppProvider();
  if (loading) {
    return <Modal />;
  }
  return (
    <section
      className={`${
        lightmode
          ? "projects-section section light-mode"
          : "projects-section section"
      }`}
    >
      <div className='projects-container container'>
        <Navbar />
        <hr />
        <Sidebar />
        <div className='projects-content'>
          <h2>My Projects</h2>
          <Row className='projects-info'>
            {projects.map(
              ({ url, desc, id, name, github_url, profile_url }) => {
                return (
                  <Col key={id} className='project'>
                    <img src={url} alt='' />
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <div className='project-btns'>
                      <Button variant='outline-primary'>
                        <a href={profile_url} target='blank'>
                          View
                        </a>
                      </Button>
                      <Button variant='outline-primary'>
                        <a href={github_url} target='blank'>
                          Repo
                        </a>
                      </Button>
                    </div>
                  </Col>
                );
              }
            )}
          </Row>
        </div>
        <h5 className='footer'>
          Copyright &copy; {new Date().getFullYear()}. All rights reserved
        </h5>
      </div>
    </section>
  );
}

export default Projects;
