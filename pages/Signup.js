import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ValidateSignup from '../components/ValidateSignup';

export default function Signup() {
  return (
    <Container className="signup" fluid>
      <Row>
        <Col md={6} className="mx-auto">
          <div>
            <Image
              src="/images/Readaway-logo-2.png"
              alt="Readaway"
              className="logo mt-2"
            />
          </div>
          <div>
            <p className="intro2">Create your Readaway account today!</p>
          </div>
          <div>
            <Image
              src="/images/Readaway-image2.png"
              alt="Reading2"
              className="reading-image2"
              fluid
            />
          </div>
        </Col>
        <Col md={6} className="mx-auto">
          <ValidateSignup />
        </Col>
      </Row>
    </Container>
  );
}
