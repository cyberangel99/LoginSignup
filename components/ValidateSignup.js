import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Row, Col, Container, Button, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState } from 'react';
import firebase from '../utils/firebase';

const ValidateSignup = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [finished, setFinished] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(12).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required()
  });

  //submit handler
  const submitSignup = (values, { resetForm }) => {
    const { email, password } = values;
    setError(false); //reset error
    setErrorMessage('');
    setFinished(false);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
        onSubmit={submitSignup}
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
                  <h2 className="login">Signup</h2>
                  <Form.Group className="email" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      value={values.email}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && errors.email}
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
                      onChange={handleChange}
                      value={values.password}
                      isValid={touched.password && !errors.password}
                      isInvalid={touched.password && errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="password" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      value={values.confirmPassword}
                      isValid={
                        touched.confirmPassword && !errors.confirmPassword
                      }
                      isInvalid={
                        touched.confirmPassword && errors.confirmPassword
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
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
    </section>
  );
};
export default ValidateSignup;
