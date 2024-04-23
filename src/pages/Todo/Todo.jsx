import { Component } from "react";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";
import PropTypes from "prop-types";
import WithLoading from "../../shared/hoc/withUIState";
import LoadingAnimation from "../../shared/Animation/LoadingAnimation";

class Todo extends Component {
  state = {
    form: {
      id: "",
      task: "",
      description: "",
      status: false,
    },
    todos: [],
    error: {
      task: "",
      description: "",
    },
  };

  componentDidMount() {
    this.props.handleShowLoading();
    setTimeout(() => {
      this.setState({
        todos: [
          {
            id: "1",
            task: "Makan",
            description: "Makan Ikan",
            status: true,
          },
        ],
      });
      this.props.handleHideLoading();
    }, 3000);
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
      error: errors,
    });

    if (Object.keys(errors).length > 0) return;
    this.props.handleShowLoading();

    const todos = this.state.todos;

    setTimeout(() => {
      if (this.state.form.id) {
        const index = todos.findIndex((todo) => todo.id === this.state.form.id);
        const todo = { ...this.state.form };
        todos.splice(index, 1, todo);
        this.props.showToast("Data Successfully Updated", "success");
        this.props.handleHideLoading();
      } else {
        const todo = {
          ...this.state.form,
          id: new Date().getMilliseconds().toString(),
        };
        todos.push(todo);
        this.setState({ todos: todos });
        this.props.showToast("Data Successfully Added", "success");
        this.props.handleHideLoading();
      }
      this.setState({
        form: {
          id: "",
          task: "",
          description: "",
          status: false,
        },
      });
    }, 2000);
  };

  handleEdit = (id) => {
    const todos = this.state.todos;

    const existTodo = todos.find((val) => val.id === id);

    if (existTodo) {
      this.setState({
        form: {
          ...existTodo,
        },
      });
    }
  };

  handleDelete = (id) => {
    if (!confirm("Apakah Yakin Ingin Menghapus Data Tersebut?")) return;
    const todos = this.state.todos;

    this.props.handleShowLoading();
    setTimeout(() => {
      const existTodo = todos.findIndex((val) => val.id === id);
      todos.splice(existTodo, 1);
      this.setState({
        todos: todos,
      });

      this.props.showToast("Data Successfully Deleted", "danger");
      this.props.handleHideLoading();
    }, 2000);
  };

  render() {
    return (
      <div className="container-fluid pt-4 px-4">
        <h2>Todo</h2>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleChangeStatus={this.handleChangeStatus}
          error={this.state.error}
          form={this.state.form}
        />
        {this.props.isLoading ? (
          <LoadingAnimation />
        ) : (
          <div className="shadow-sm p-4 rounded-2 mt-4">
            <h3>List Todo</h3>
            <TodoList
              todos={this.state.todos}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
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
