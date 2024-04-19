import { IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { Component } from "react";

export default class Todo extends Component {
  state = {
    form: {
      id: "",
      task: "",
      description: "",
      status: false,
    },
    todos: [
      {
        id: "1",
        task: "Fisika",
        description: "Hukum Newton",
        status: true,
      },
    ],
    error: {
      task: "",
      description: "",
    },
  };

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

    const todos = this.state.todos;

    if (this.state.form.id) {
      const index = todos.findIndex((todo) => todo.id === this.state.form.id);
      const todo = { ...this.state.form };
      todos.splice(index, 1, todo);
    } else {
      const todo = {
        ...this.state.form,
        id: new Date().getMilliseconds().toString(),
      };
      todos.push(todo);
      this.setState({ todos: todos });
    }
    this.setState({
      form: {
        id: "",
        task: "",
        description: "",
        status: false,
      },
    });
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
    const todos = this.state.todos;
    const existTodo = todos.find((val) => val.id === id);

    if (existTodo) {
      todos.splice(existTodo, 1);
      this.setState({
        todos,
      });
    }
  };

  render() {
    return (
      <div className="container-fluid pt-4 px-4">
        <h2>Todo</h2>
        <form onSubmit={this.handleSubmit} className="shadow sm p-4 rounded-4">
          <h3>Todo</h3>

          <div className="mb-3">
            <label htmlFor="task" className="form-label">
              Tugas
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="task"
              name="task"
              value={this.state.form.task}
            />

            <label htmlFor="description" className="form-label">
              Deskripsi
            </label>
            <textarea
              onChange={this.handleChange}
              className="form-control"
              name="description"
              id="description"
              rows="3"
              value={this.state.form.description}
            ></textarea>
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

        <div className="shadow-sm p-4 rounded-2 mt-4">
          <h3>List Todo</h3>
          <div className="table-table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Task</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map((todo, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{++idx}</td>
                      <td>{todo.task}</td>
                      <td>{todo.description}</td>
                      <td>
                        <span
                          className={`badge text-white ${
                            todo.status ? "text-bg-success" : "text-bg-danger"
                          }`}
                        >
                          {todo.status ? "Selesai" : "Belum Selesai"}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <button
                            // onClick={() => this.handleEdit(todo.id)}
                            onClick={()=> this.setState({form: todo})}
                            className="btn btn-primary"
                          >
                            <IconEdit size={22} />
                          </button>
                          <button
                            onClick={() => this.handleDelete(todo.id)}
                            className="btn btn-danger text-white"
                          >
                            <IconTrash size={22} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
