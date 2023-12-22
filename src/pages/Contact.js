import React, { useRef, useState } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { FaGithubSquare, FaLinkedin, FaCopy } from "react-icons/fa";
import { useAppProvider } from "../context";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import { toast } from "react-toastify";
const email = "ayomikunfasina240@gmail.com";
const phone = "+2348169679471";
function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const { loading, lightmode } = useAppProvider();

  const form = useRef();
  const handleCopyToClipboard = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success("Copied to Clipboard");
    } catch (error) {
      console.log(error);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Message sent successfully");
          setSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
          setSubmitting(false);
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
        <div className='contact-container container'>
          <Navbar />
          <hr />
          <Sidebar />
          <div className='contact-content'>
            <h4>Have a Job for me?</h4>
            <h2>Send me a message</h2>
            <Form ref={form} onSubmit={sendEmail} autoComplete='off'>
              <Form.Group>
                <FloatingLabel
                  controlId='floatingInput'
                  label='Your Name'
                  className='mb-3'
                >
                  <Form.Control
                    type='text'
                    placeholder='Your Name'
                    autoComplete='false'
                    name='user_name'
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
                <FloatingLabel controlId='floatingInput' label='Your Email'>
                  <Form.Control
                    type='email'
                    name='user_email'
                    placeholder='Your Email'
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
                  controlId='floatingInput'
                  label='Your Message'
                  className='mb-3'
                >
                  <Form.Control
                    placeholder='Your Message'
                    name='message'
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
                disabled={submitting}
                variant='outline-primary'
                className='btn'
                value='Send'
                type='submit'
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </Form>
          </div>
        </div>
      </section>
      <div className={`${lightmode ? "address light-mode" : "address"}`}>
        <div>
          <div>
            <h4>
              Email:{" "}
              <span onClick={() => handleCopyToClipboard(email)}>
                ayomikunfasina240@gmail.com <FaCopy />
              </span>
            </h4>
            <h4>
              Phone:{" "}
              <span onClick={() => handleCopyToClipboard(phone)}>
                +2348169679471 <FaCopy />{" "}
              </span>
            </h4>
          </div>
          <div className='social-icons'>
            <a href='https://github.com/Fasina-ayomikun/' target='blank'>
              <FaGithubSquare />
            </a>
            <a
              href='https://www.linkedin.com/in/ayomikun-fasina-b791ab225'
              target='blank'
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
