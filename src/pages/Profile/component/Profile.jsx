import { Component } from "react";
import { IconEdit } from "@tabler/icons-react";

export default class Profile extends Component {
  state = {
    name: "Imam",
    email: "imamsuyuti@gmail.com",
    bio: "BE Developer",
    address: "Malang",
    isEditing: false,
  };

  handleEditProfile = () => {
    this.setState({ isEditing: true });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data profil diperbarui:", this.state);
    this.setState({ isEditing: false });
  };

  render() {
    const { name, email, bio, address, isEditing } = this.state;

    if (isEditing) {
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
                  className="form-control mb-2"
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  className="form-control mb-2"
                />
                <label htmlFor="bio">Bio:</label>
                <textarea
                  type="bio"
                  name="bio"
                  value={bio}
                  onChange={this.handleChange}
                  className="form-control mb-2"
                />
                <label htmlFor="address">Alamat:</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={this.handleChange}
                  className="form-control mb-2"
                />
                <button type="submit" className="btn btn-primary">
                  Simpan
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div className="container-fluid pt-4 px-4 align-items-center d-flex justify-content-center">
        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src="https://media.istockphoto.com/id/930936680/vector/owl-with-glasses.jpg?s=612x612&w=0&k=20&c=V2dMLYoBR722Fwu3Frc0T2MkAxdk5-PBMV8JHzT3G7c="
              alt="Profile Picture"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8 align-content-center">
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Bio: {bio}</p>
            <p>Alamat: {address}</p>
            <div className="d-flex gap-2">
              <button
                className="btn btn-primary"
                onClick={this.handleEditProfile}
              >
                Edit
                <IconEdit size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
