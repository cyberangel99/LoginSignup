import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

const ValidateSignup = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(12).required(),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        email: '',
        password: '',
        confirmPassword: ''
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form className="login_form" noValidate onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Col md={12}>
                <h2 className="login">Login</h2>
                <Form.Group className="email" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Email" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="password" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="password" controlId="password">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="button">
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );
};
export default ValidateSignup;
