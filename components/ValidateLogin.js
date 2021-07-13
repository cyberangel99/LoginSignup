import { CheckCircle } from 'react-bootstrap-icons';
import { Form, Button } from 'react-bootstrap';
//work on only getting react bootstrap items into project note regular bootstrap, rework form and style.
const ValidateLogin = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    /*<form className="login_form">
      <h5 className="login">Log in</h5>
      <div className="mb-3">
        <label htmlFor="exampleInputUsername" className="form-label">
          UserName
        </label>
        <input
          type="text"
          className="form-control success error"
          aria-describedby="UsernameHelp"
          placeholder="Username"
        />
        <CheckCircle />
        <i className="bi bi-exclamation-circle-fill"></i>
      </div>
      <div className="mb-3 mb-0">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control success error"
          id="exampleInputPassword1"
          placeholder="Password"
        />
        <i className="bi bi-check-circle"></i>
        <i className="bi bi-exclamation-circle-fill"></i>
      </div>
      <div>
        <a href="#" className="link-primary">
          Forgot Password?
        </a>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>*/
  );
};
export default ValidateLogin;
