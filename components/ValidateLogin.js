import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ValidateLogin = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(12).required()
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form onSubmit={handleSubmit} className="login_form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          ref={register}
        />
        <p>{errors.email?.message}</p>

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
        <p>{errors.password?.message}</p>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default ValidateLogin;
