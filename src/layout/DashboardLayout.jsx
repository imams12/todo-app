import "./App.css";
import Login from "./pages/Authentication/components/Login";
import { Component } from "react";
import Header from "./shared/Header/Header";
import Sidebar from "./shared/Sidebar/Sidebar";
import Dashboard from "./shared/Dashboard/Dashboard";
import PropTypes from "prop-types";
import withUIState from "./shared/hoc/withUIState.jsx";
import { Outlet } from "react-router-dom";

class DashboardLayout extends Component {
  state = {
    // page : <Dashboard/>,
    isAuthenticated: true,
  }

  navigateTo = (component) =>{
    this.setState({page : component})
  }

  handleAuthentication = (status) =>{
    this.setState({
      isAuthenticated: status,
    })
    if(status){
      this.props.showToast("Sukses login.");
    }else{
      this.props.showToast("Sukses logout.");
    }
  }

  render() {
    const {page, isAuthenticated} = this.state;

    return (
      <>
      {isAuthenticated ? (
          <div className="d-flex">
          <Sidebar navigateTo={this.navigateTo}
          handleAuthentication={this.handleAuthentication}
          >
            <Outlet/>
          </Sidebar>
          <main className="w-100 flex-grow-1">
            <Header navigateTo={this.navigateTo}
            handleAuthentication={this.handleAuthentication}
            />
            <Outlet/>
          </main>
        </div>
      ):(
          <Login handleAuthentication={this.handleAuthentication} />
      )}
      </>
    );
  }
}

DashboardLayout.propTypes = {
  showToast: PropTypes.func,
};

const DashboardLayoutComponent = withUIState(DashboardLayout);

export default DashboardLayoutComponent;
