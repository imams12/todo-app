import { Component } from "react";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";
import PropTypes from "prop-types";
import WithLoading from "../../shared/hoc/withUIState";
import LoadingAnimation from "../../shared/Animation/LoadingAnimation";

class Todo extends Component {
  
  render() {
    return (
      <div className="container-fluid pt-4 px-4">
        <h2>Todo</h2>
        <TodoForm />
        {this.props.isLoading ? (
          <LoadingAnimation />
        ) : (
          <div className="shadow-sm p-4 rounded-2 mt-4">
            <h3>List Todo</h3>
            <TodoList />
          </div>
        )}
      </div>
    );
  }
}

Todo.propTypes = {
  isLoading: PropTypes.bool,
  handleShowLoading: PropTypes.func,
  handleHideLoading: PropTypes.func,
  showToast: PropTypes.func,
};

export default WithLoading(Todo);
