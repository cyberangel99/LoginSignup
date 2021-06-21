import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Readaway() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div>
            <Image
              src="/images/Readaway-logo.png"
              alt="Readaway"
              className="logo"
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
      </Row>
    </Container>
  );
}
