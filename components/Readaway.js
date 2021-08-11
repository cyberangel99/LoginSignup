import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ValidateLogin from '../components/ValidateLogin';

export default function Readaway() {
  return (
    <section className="loginPage">
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
                Want to read about an adventure on the high seas? Maybe a novel
                of the renaissance era? Log in today to access your reading
                novel!
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
            <ValidateLogin />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
