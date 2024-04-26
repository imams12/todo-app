import { IconDeviceFloppy } from "@tabler/icons-react";
import { Component } from "react";
import PropTypes from "prop-types";
import {
  add,
  postTodoAction,
  selectedTodo,
  update,
  updateTodoAction,
} from "../slice/TodoSlice.js";
import { connect } from "react-redux";

class TodoForm extends Component {
  state = {
    form: {
      id: "",
      task: "",
      description: "",
      status: false,
    },
    errors: {
      task: "",
      description: "",
    },
  };

  componentDidUpdate(prevProps) {
    if (this.props.todo && prevProps.todo !== this.props.todo) {
      this.setState({
        form: this.props.todo,
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  handleChangeStatus = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        status: event.target.checked,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (this.state.form.task === "") {
      errors.task = "Tugas Wajib Di Isi";
    }

    if (this.state.form.description === "") {
      errors.description = "Deskripsi Wajib Di Isi";
    }

    this.setState({
      errors: errors,
    });

    if (Object.keys(errors).length > 0) return;

    if (this.state.form.id) {
      const todo = { ...this.state.form };
      // this.props.update(todo);
      this.props.updateTodoAction(todo);
    } else {
      const todo = {
        ...this.state.form,
        id: new Date().getMilliseconds().toString(),
      };
      this.props.add(todo);
    }
    this.clearForm();
  };

  clearForm = () => {
    this.setState(
      {
        form: {
          id: "",
          task: "",
          description: "",
          status: false,
        },
      },
      () => {
        this.props.selectedTodo(null);
      }
    );
  };

  render() {
    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className="shadow sm p-4 rounded-2"
      >
        <h3>Form Todo</h3>

        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Tugas
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            className={`form-control mb-4 ${
              this.state.errors.task && `is-invalid`
            }`}
            id="task"
            name="task"
            value={this.state.form.task}
          />
          {this.state.errors.task && (
            <div className="invalid-feedback">{this.state.errors.task}</div>
          )}

          <label htmlFor="description" className="form-label">
            Deskripsi
          </label>
          <textarea
            onChange={this.handleChange}
            className={`form-control mb-4 ${
              this.state.errors.description && `is-invalid`
            }`}
            name="description"
            id="description"
            rows="3"
            value={this.state.form.description}
          ></textarea>
          {this.state.errors.description && (
            <div className="invalid-feedback">
              {this.state.errors.description}
            </div>
          )}
        </div>
        <div className="form-check">
          <input
            onChange={this.handleChangeStatus}
            type="checkbox"
            className="form-check-input"
            id="status"
            checked={this.state.form.status}
          />
          <label htmlFor="status" className="form-check-label">
            Selesai
          </label>
        </div>
        <div className="d-flex gap-2 mt-4">
          <button
            type="submit"
            className="btn btn-primary me-2 d-flex align-items-center gap-2"
          >
            <i>
              <IconDeviceFloppy />
              Submit
            </i>
          </button>
          <button
            onClick={this.clearForm}
            type="reset"
            className="btn btn-primary me-2 d-flex align-items-center gap-2"
          >
            <i>
              <IconDeviceFloppy />
              Reset
            </i>
          </button>
        </div>
      </form>
    );
  }
}

TodoForm.propTypes = {
  add: PropTypes.func,
  todo: PropTypes.object,
  selectedTodo: PropTypes.func,
  update: PropTypes.func,
  updateTodoAction: PropTypes.func,
  postTodoAction: PropTypes.func,
};

const mapStateToProps = (state) => ({
  todo: state.todo.todo,
});

const mapDispatchToProps = {
  add,
  selectedTodo,
  update,
  postTodoAction,
  updateTodoAction,
};

const TodoFormComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

export default TodoFormComponent;
