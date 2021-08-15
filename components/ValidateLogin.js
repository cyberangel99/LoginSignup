import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';

const ValidateLogin = () => {
  //install formik and redo form and read it on react boot strap js
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(12).required()
  });
  const formSubmit = (values, { resetForm }) => {
    console.log(values);
  };

  return (
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
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );

  /*<Form onSubmit={handleSubmit} className="_form_form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          ref={register}
        />

        <Form.Text className="form-label">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          ref={register}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
  </Form>*/
};
export default ValidateLogin;
