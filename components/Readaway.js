import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ValidateLogin from '../components/ValidateLogin';

export default function Readaway() {
  return (
    <Container className="loginPage" fluid>
      <Row>
        <Col md={6} className="mx-auto login_col">
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
              className="reading-image"
              fluid
            />
          </div>
        </Col>
        <Col md={6}>
          <ValidateLogin />
        </Col>
      </Row>
    </Container>
    // </section>
  );
}
