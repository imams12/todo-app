import { Component } from "react";
import { IconArrowLeft } from "@tabler/icons-react";
// import login from "../../../src/assets/login.svg";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  // state = {
  //   form: {
  //     username: "",
  //     password: "",
  //   },
  //   errors: {
  //     username: "",
  //     password: "",
  //   },
  //   isValid: false,
  // };

  // handleChange = (e) => {
  //   const { name, value } = e.target;

  //   let errors = { ...this.state.errors };

  //   if (name === "username") {
  //     errors.username = value.length === 0 ? "Username wajib di isi!" : "";
  //   }

  //   if (name === "password") {
  //     errors.password = value.length === 0 ? "Password wajib di isi!" : "";
  //   }

  //   this.setState(
  //     {
  //       form: {
  //         ...this.state.form,
  //         [name]: value,
  //       },
  //       errors,
  //     },
  //     this.validateForm
  //   );
  // };

  // validateForm = () => {
  //   const { username, password } = this.state.form;
  //   const { errors } = this.state;

  //   const isValid =
  //     username.trim() !== "" &&
  //     password.trim() !== "" &&
  //     Object.values(errors).every((error) => error === "");

  //   this.setState({ isValid });
  // };

  // handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   const { username, password } = this.state.form;
  //   if (!this.state.isValid) return;

  //   if (username === "admin" && password === "password") {
  //     this.props.handleAuthentication(true);
  //   }
  // };

  // render() {
  const schema = z.object({
    username: z
      .string()
      .min(6, { message: "Username is required at least 6 characters!" }),
    password: z
      .string()
      .min(8, { message: "Password is required at least 8 characters!" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode:"onChange",
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async(data) => {
    const response = await axios.post("/api/auth/login", data);
    console.log(response);
    navigate("/dashboard");
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className="p-4">
            <div className="row mt-4 mb-3">
              <div className="col text-center">
                <img
                  src="src/assets/login.svg"
                  alt="login"
                  className="img-fluid"
                  style={{ height: 200 }}
                />
              </div>
              <h2 className="text-center">Log In</h2>
              <div className="mb-3">
                <label htmlFor="email">Username</label>
                <input
                  // onChange={this.handleChange}
                  {...register("username")}
                  type="text"
                  name="username"
                  id="username"
                  className={`form-control rounded-0 border-0 border-bottom
                      ${errors.username && `is-invalid`}
                    `}
                />
                  {errors.username && (
                    <div className="invalid-feedback">
                      {errors.username.message}
                    </div>
                  )}
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  // onChange={this.handleChange}
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  className={`form-control rounded-0 border-0 border-bottom 
                  ${errors.password && `is-invalid`}
                    `}
                  aria-describedby="passwordHelpBlock"
                />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                <div id="passwordHelpBlock" className="form-text">
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </div>
              </div>

              <div className="mb-3 text-end">
                <a href="#">Lupa Password</a>
              </div>
              <button
                disabled={!isValid}
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
// }

Login.propTypes = {
  handleAuthentication: PropTypes.func,
};

export default Login;
