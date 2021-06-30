import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Readaway() {
  return (
    <Container fluid>
      <Row>
        <Col className="mx-auto">
          <div>
            <Image
              src="/images/Readaway-logo-2.png"
              alt="Readaway"
              className="logo mt-2"
            />
          </div>
          <div>
            <p className="intro">
              Want to read about an adventure on the high seas? Maybe a novel of
              the renaissance era? Log in today to access your reading novel!
            </p>
          </div>
          <div>
            <Image
              src="/images/Readaway-image1.png"
              alt="Reading"
              className="reading-image1"
            />
          </div>
        </Col>
        <Col>
          <form className="login_form">
            <h5 className="login">Log in</h5>
            <div className="mb-3">
              <label for="exampleInputUsername" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="UsernameHelp"
              />
            </div>
            <div className="mb-3 mb-0">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div>
              <a href="#" className="link-primary">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
