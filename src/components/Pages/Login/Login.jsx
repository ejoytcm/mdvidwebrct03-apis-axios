import React  from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    
  const history = useHistory();

  const loginFormSubmitHandler = event => {
    event.preventDefault();
    localStorage.setItem("token", "f60a3ace4a277086fd39e4357837606b78726ef52bd2e471c1dd1b5c1279e89e");
    history.push("/users");
  }

  return (
    <React.Fragment>
      <h4 className="text-center">Welcome back</h4>
      <form className="mt-5" onSubmit={loginFormSubmitHandler}>
        <div className="form-group">
          <label htmlFor="inputemail">Email</label>
          <input
            type="text"
            className="form-control"
            id="inputemail"
            name="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"/>
        </div>
        <button className="btn btn-secondary">Login</button>
      </form>
    </React.Fragment>
  );
};

export default Login;
