import Toast from "../Toast/Toast";
import { Component } from "react";

export default function WithLoading(WrappedComponent) {
  return class HOC extends Component {
    state = {
      isLoading: false,
      showToast : false,
      toastMessage  : "",
      toastColor  : "primary",
    };

    handleShowLoading = () => {
      this.setState({ isLoading: true });
    };

    handleHideLoading = () => {
      this.setState({ isLoading: false });
    };

    showToast = (message, color) => {
      this.setState({
        showToast: true,
        toastMessage: message,
        toastColor: color || this.state.toastColor
      });

      setTimeout(() => {
        this.setState({showToast: false})
      }, 4000);
    }

    render() {
      return (
        <>
        {this.state.showToast && (
          <Toast
            message={this.state.toastMessage}
            color={this.state.toastColor}
          />
        )}
        <WrappedComponent
          {...this.props} // melakukan copy ke semua property dari component with loading
          showToast={this.showToast}
          isLoading={this.state.isLoading}
          handleHideLoading={this.handleHideLoading}
          handleShowLoading={this.handleShowLoading}
        ></WrappedComponent>
        </>
      );
    }
  };
}
