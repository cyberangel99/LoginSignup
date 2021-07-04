export default () => {
  return (
    <form className="login_form">
      <h5 className="login">Log in</h5>
      <div className="mb-3">
        <label for="exampleInputUsername" className="form-label">
          UserName
        </label>
        <input
          type="text"
          className="form-control"
          aria-describedby="UsernameHelp"
        />
      </div>
      <div className="mb-3 mb-0">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div>
        <a href="#" className="link-primary">
          Forgot Password?
        </a>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};
