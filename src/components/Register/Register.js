import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authServices";

const Register = () => {
  const navigate = useNavigate();
  function registerHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");

    authService
      .register(email, password)
      .then(authData => console.log(authData));
    navigate("/");
  }
  return (
    <section id="registerPage">
      <form onSubmit={registerHandler}>
        <fieldset>
          <legend>Register</legend>

          <label for="email" class="vhide">
            Email
          </label>
          <input
            id="email"
            class="email"
            name="email"
            type="text"
            placeholder="Email"
          />

          <label for="password" class="vhide">
            Password
          </label>
          <input
            id="password"
            class="password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <label for="conf-pass" class="vhide">
            Confirm Password:
          </label>
          <input
            id="conf-pass"
            class="conf-pass"
            name="conf-pass"
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit" class="register">
            Register
          </button>

          <p class="field">
            <span>
              If you already have profile click <a href="/login">here</a>
            </span>
          </p>
        </fieldset>
      </form>
    </section>
  );
};

export default Register;
