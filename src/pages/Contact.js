import React, { useRef } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useAppProvider } from "../store/context";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
function Contact() {
  const { loading, lightmode } = useAppProvider();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t78vsfg",
        "template_o6b0e4o",
        form.current,
        "JZyuDV0Kihz92g5_Z"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  if (loading) {
    return <Modal />;
  }
  return (
    <>
      <section
        className={`${
          lightmode
            ? "contact-section section light-mode"
            : "section contact-section"
        }`}
      >
        <div className="contact-container container">
          <Navbar />
          <hr />
          <Sidebar />
          <div className="contact-content">
            <h4>Have a Job for me?</h4>
            <h2>Send me a message</h2>
            <Form ref={form} onSubmit={sendEmail} autoComplete="off">
              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    autoComplete="false"
                    name="hidden user_name"
                    style={{
                      height: "100px",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      color: "var(--beige)",
                    }}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group>
                <FloatingLabel controlId="floatingInput" label="Your Email">
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    style={{
                      height: "100px",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      color: "var(--beige)",
                    }}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Message"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="Your Message"
                    name="message"
                    style={{
                      height: "100px",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      color: "var(--beige)",
                    }}
                  />
                </FloatingLabel>
              </Form.Group>
              <Button
                variant="outline-primary"
                className="btn"
                value="Send"
                type="submit"
              >
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </section>
      <div className={`${lightmode ? "address light-mode" : "address"}`}>
        <div>
          <div>
            <h4>
              Email: <span>ayomikunfasina240@gmmail.com</span>
            </h4>
            <h4>
              Phone: <span>+234 816 967 9471</span>
            </h4>
          </div>
          <div className="social-icons">
            <a href="https://github.com/Fasina-ayomikun/" target="blank">
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/ayomikun-fasina-b791ab225"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <h5 className={`${lightmode ? "footer light-mode" : "footer"}`}>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved
      </h5>
    </>
  );
}

export default Contact;
