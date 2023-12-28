import React from "react";
import Navbar from "../components/Navbar";
import { Row, Col } from "react-bootstrap";
import { projects } from "../data";
import { useAppProvider } from "../context";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import LinkButton from "../components/LinkButton";

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
      <div className="projects-container container">
        <Navbar />
        <hr />
        <Sidebar />
        <div className="projects-content">
          <h2>My Projects</h2>
          <Row className="projects-info">
            {projects.map(
              ({ url, desc, id, name, github_url, profile_url }) => {
                return (
                  <Col key={id} className="project">
                    <img src={url} alt="" />
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <div className="project-btns">
                      <LinkButton url={profile_url}>View</LinkButton>
                      <LinkButton url={github_url}>Repo</LinkButton>
                    </div>
                  </Col>
                );
              }
            )}
          </Row>
        </div>
        <h5 className="footer">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved
        </h5>
      </div>
    </section>
  );
}

export default Projects;
