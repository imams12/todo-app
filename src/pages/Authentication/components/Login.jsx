import { Component } from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import login from "../../../assets/login.svg";

class Login extends Component {
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
          back
        </a>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <div className="shadow-lg rounded-4" style={{ width: 600 }}>
            <form className="p-4">
              <div className="row mt-4 mb-3">
                <div className="col text-center">
                  <img
                    src={login}
                    alt="login"
                    className="img-fluid"
                    style={{ minHeight: 200 }}
                  />
                </div>
                <h2 className="text-center">Log In</h2>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control rounded-0 border-0 border-bottom"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control rounded-0 border-0 border-bottom"
                    aria-describedby="passwordHelpBlock"
                  />
                  <div id="passwordHelpBlock" class="form-text">
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </div>
                </div>

                <div className="mb-3 text-end">
                  <a href="#">Lupa Password</a>
                </div>
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
