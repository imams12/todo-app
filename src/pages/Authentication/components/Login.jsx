import { Component } from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import login from "../../../assets/login.svg";
import PropTypes from "prop-types";

class Login extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
    errors: {
      username: "",
      password: "",
    },
    isValid: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    let errors = { ...this.state.errors };

    if (name === "username") {
      errors.username = value.length === 0 ? "Username wajib di isi!" : "";
    }

    if (name === "password") {
      errors.password = value.length === 0 ? "Password wajib di isi!" : "";
    }

    this.setState(
      {
        form: {
          ...this.state.form,
          [name]: value,
        },
        errors,
      },
      this.validateForm
    );
  };

  validateForm = () => {
    const { username, password } = this.state.form;
    const { errors } = this.state;

    const isValid =
      username.trim() !== "" &&
      password.trim() !== "" &&
      Object.values(errors).every((error) => error === "");

    this.setState({ isValid });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state.form;
    if (!this.state.isValid) return;

    if (username === "admin" && password === "password") {
      this.props.handleAuthentication(true);
    }
  };

  render() {
    return (
      <>
        <a
          href="#"
          style={{ width: "max-content" }}
          className="user-select-all p-4 d-flex aligns-items-center gap-2 text-decoration-none"
        >
          <span>
            <IconArrowLeft />
          </span>
          Kembali
        </a>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <div className="shadow-lg rounded-4" style={{ width: 500 }}>
            <form onSubmit={this.handleOnSubmit} className="p-4">
              <div className="row mt-4 mb-3">
                <div className="col text-center">
                  <img
                    src={login}
                    alt="login"
                    className="img-fluid"
                    style={{ height: 200 }}
                  />
                </div>
                <h2 className="text-center">Log In</h2>
                <div className="mb-3">
                  <label htmlFor="email">Username</label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="username"
                    id="username"
                    className={`form-control rounded-0 border-0 border-bottom
                      ${this.state.errors.username && "is-invalid"}
                    `}
                  />
                  <div className="invalid-feedback">
                    {this.state.errors.username}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    id="password"
                    className={`form-control rounded-0 border-0 border-bottom 
                      ${this.state.errors.password && "is-invalid"}
                    `}
                    aria-describedby="passwordHelpBlock"
                  />
                  <div className="invalid-feedback">
                    {this.state.errors.password}
                  </div>
                  <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </div>
                </div>

                <div className="mb-3 text-end">
                  <a href="#">Lupa Password</a>
                </div>
                <button
                  disabled={!this.state.isValid}
                  type="submit"
                  className="btn btn-primary mt-4 w-100"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

Login.propTypes = {
  handleAuthentication: PropTypes.func,
};

export default Login;
