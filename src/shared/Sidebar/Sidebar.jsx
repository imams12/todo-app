import { IconChevronDown } from "@tabler/icons-react";
import { IconAsset } from "@tabler/icons-react";
import { IconUsers } from "@tabler/icons-react";
import { IconAccessible } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconHome2 } from "@tabler/icons-react";
import { IconApps } from "@tabler/icons-react";
import { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Todo from "../../pages/Todo/Todo";
import { IconListDetails } from "@tabler/icons-react";
import { IconReceipt } from "@tabler/icons-react";
import { IconDoorExit } from "@tabler/icons-react";
import PropTypes from "prop-types"
import Profile from "../../pages/Profile/component/Profile";
import { Link } from "react-router-dom";

export default function Sidebar (){
//   handleLogout = () => {
//     if(!confirm("Apakah yakin ingin logout?")) return;
//     this.props.handleAuthentication(false);
//   }

  // render() {

  //   const { navigateTo } = this.props

    return (
      <div
        className="bg-primary text-white p-4 shadow"
        style={{ width: 300, minHeight: "100dvh"}}
      >
        <div className="font-logo text-center mb-5">
            <h2 className="fs-2">
                <i>
                <Link to="/" className="text-white text-decoration-none" href="/"><b>Enigma </b> Shop</Link>
                    
                </i>
            </h2>
            <h2 className="fs-6 my-4 font-primary fw-bold">
              Backoffice
            </h2>
        </div>
        <nav>
          <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
            <p className="fw-bold">Dashboard</p>
            <li className="cursor-pointer text-white"
              data-bs-toggle = "collapse"
              data-bs-target = "#dashboard-collapse"
              aria-expanded = "true"
              >
                <i className="me-3">
                  <IconApps/>
                </i>
                <span>Master</span>
                <i className="ms-3">
                  <IconChevronDown/>
                </i>
              </li>
              <div className="collapse" id="dashboard-collapse">
                <ul className="text-white cursor-pointer d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
                  <li 
                  // onClick={() => {
                  //   navigateTo(<Dashboard />)
                  // }}
                  className="cursor-pointer">
                    
                    <i className="me-3">
                      <IconHome2/>
                    </i>
                    <span>
                    <Link to="/dashboard" className="text-white text-decoration-none" href="/dashboard">Home</Link>
                    </span>
                    
                  </li>
                  <li 
                  // onClick={() => {
                  //   navigateTo(<Todo />)
                  // }}
                  className="cursor-pointer">
                    <Link to={"/todo"}></Link>
                    <i className="me-3">
                      <IconListDetails/>
                    </i>
                    <span>
                      <Link to="/todos" className="text-white text-decoration-none" href="/todos">Todo</Link>
                    </span>
                  </li>
                  <li className="cursor-pointer">
                    <i className="me-3">
                      <IconAsset/>
                    </i>
                    <span>
                    <Link to="/products" className="text-white text-decoration-none" href="/products">Product</Link>
                    </span>
                  </li>
                  <li className="cursor-pointer">
                    <i className="me-3">
                      <IconUsers/>
                    </i>
                    <span>
                    <Link to="/customers" className="text-white text-decoration-none" href="/customers">Customer</Link>
                    </span>
                  </li>
                  <li className="cursor-pointer">
                    <i className="me-3">
                      <IconAccessible/>
                    </i>
                    <span>
                    <Link to="/admins" className="text-white text-decoration-none" href="/admins">Admin</Link>
                    </span>
                  </li>
                </ul>
              </div>
              <p className="fw-bold mt-4">Transaction</p>
              <li className="cursor-pointer text-white">
                <i className="me-3">
                  <IconReceipt/>
                </i>
                <span>
                <Link to="/trx" className="text-white text-decoration-none" href="/trx">Transaction</Link>
                </span>
              </li>
              <p className="fw-bold mt-4">Settings</p>
              <li 
              // onClick={() => {
              //       navigateTo(<Profile />)
              //     }}
              className="cursor-pointer text-white">
                <i className="me-3">
                  <IconUser />
                </i>
                <span>
                <Link to="/profile" className="text-white text-decoration-none" href="/profile">User</Link>
                </span>
              </li>
              <hr />
              <li 
                // onClick={this.handleLogout}
                className="cursor-pointer text-white"
              >
                <i className="me-3">
                  <IconDoorExit />
                </i>
                <span>
                  <Link to="/login" className="text-white text-decoration-none">Logout</Link>
                  </span>
              </li>
          </ul>
        </nav>
      </div>
    );
  // }
}

// Sidebar.propTypes = {
//   navigateTo: PropTypes.func,
//   handleAuthentication: PropTypes.func,
// }
