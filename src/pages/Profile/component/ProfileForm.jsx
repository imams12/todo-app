import React, { Component } from "react";
import PropsTypes from "prop-types"

export default class ProfileForm extends Component {
  state = {
    ...this.props.profile,
    errors: {}
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, bio, address } = this.state;

    const errors = {};

    if (!name.trim()) {
      errors.name = "Nama tidak boleh kosong";
    }
    if (!email.trim()) {
      errors.email = "Email tidak boleh kosong";
    }
    if (!bio.trim()) {
      errors.bio = "Bio tidak boleh kosong";
    }
    if (!address.trim()) {
      errors.address = "Alamat tidak boleh kosong";
    }

    if (Object.keys(errors).length === 0) {
      if (!window.confirm("Apakah Anda yakin ingin menyimpan data ini?")) return;

      console.log("Data profil diperbarui:", this.state);
      this.setState({ errors: {} });
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { name, email, bio, address, errors } = this.state;

    return (
      <div className="container-fluid pt-4 px-4 align-items-center d-flex justify-content-center">
        <form onSubmit={this.handleSubmit}>
          <div className="card mt-5">
            <div className="card-body align-content-center">
              <label htmlFor="name">Nama:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                className={`form-control mb-2 ${errors.name && "is-invalid"}`}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className={`form-control mb-2 ${errors.email && "is-invalid"}`}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              <label htmlFor="bio">Bio:</label>
              <textarea
                type="bio"
                name="bio"
                value={bio}
                onChange={this.handleChange}
                className={`form-control mb-2 ${errors.bio && "is-invalid"}`}
              />
              {errors.bio && <div className="invalid-feedback">{errors.bio}</div>}
              <label htmlFor="address">Alamat:</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={this.handleChange}
                className={`form-control mb-2 ${errors.address && "is-invalid"}`}
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}

              <button type="submit" className="btn btn-primary">
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ProfileForm.propsTypes={
    profile: PropsTypes.object,
}