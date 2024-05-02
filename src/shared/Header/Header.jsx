import { Component } from "react";
import { IconSettings2 } from "@tabler/icons-react";
import PropTypes from "prop-types";
import { IconDoorExit } from "@tabler/icons-react";
import Profile from "../../pages/Profile/component/Profile";
import { Link } from "react-router-dom";

export default class Header extends Component {
  handleLogout = () => {
    if (!confirm("Apakah yakin ingin logout?")) return;
    this.props.handleAuthentication(false);
  };

  render() {
    const { navigateTo } = this.props;

    return (
      <div className="d-flex justify-content-end shadow-sm px-4 py-2">
        <button
          data-bs-toggle="dropdown"
          aria-expanded="false"
          className="btn btn-link"
        >
          <img
            className="rounded-circle cursor-pointer"
            width={32}
            height={32}
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png"
            alt="avatar"
          />
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item-text">
            <div className="flex-grow-1 ms-3">
              <h6 className="mb-1">Nikola Tesla</h6>
              <span>nikola.tesla@gmail.com</span>
            </div>
          </li>
          <hr />
          <li>
            <a
              // onClick={() => {
              //   navigateTo(<Profile />);
              // }}
              className="dropdown-item"
              href="#"
            >
              <i className="me-2">
                <IconSettings2 size={16} />
              </i>
              <Link to="/profile" className="text-dark text-decoration-none" href="/profile">Sunting Profil</Link> 
            </a>
          </li>
          <li>
            <button
              // onClick={this.handleLogout}
              className="dropdown-item"
              href="#"
            >
              <i className="me-2">
                <IconDoorExit size={16} />
              </i>
              <Link to="/login" className="text-dark text-decoration-none">Logout</Link> 
              
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

Header.propTypes = {
  navigateTo: PropTypes.func,
  handleAuthentication: PropTypes.func,
};
