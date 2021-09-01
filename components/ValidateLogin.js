import { Form, Row, Col, Container, Button, Alert } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';
import firebase from '../utils/firebase';
import { useState } from 'react';
import { useRouter } from 'next/router';

const ValidateLogin = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [finished, setFinished] = useState(false);

  //Schema
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(12).required()
  });

  // Submit handler
  const formSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    setError(false); //reset error
    setErrorMessage('');
    setFinished(false);
    // API call to firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setFinished(true);
        resetForm();
        router.push('/dashboard');
        localStorage.setItem('token', response.user.refreshToken);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
        setError(true);
        setErrorMessage(error.message);
      });
  };

  return (
    <section>
      {/* Show errors */}
      {error && <Alert variant="danger">{errorMessage}</Alert>}
      {/* Show success*/}
      {finished && <Alert variant="success">Successfully login in!</Alert>}
      <Formik
        validationSchema={schema}
        onSubmit={formSubmit}
        initialValues={{
          email: '',
          password: ''
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
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && errors.email}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="password" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      isValid={touched.password && !errors.password}
                      isInvalid={touched.password && errors.password}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="button">
                    Submit
                  </Button>{' '}
                  <a href="/Signup" class="link-primary">
                    Don't have an account? Sign up here!
                  </a>
                </Col>
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default ValidateLogin;
