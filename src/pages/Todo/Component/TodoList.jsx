import { IconTrash } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
import { Component } from "react";
import PropTypes from 'prop-types';

class TodoList extends Component{
    render(){
        const{
            todos,
            handleDelete,
            handleEdit
        } = this.props
        return (
            <div>
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
                {todos.map((todo, idx) => {
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
                            onClick={() => handleEdit(todo.id)}
                            className="btn btn-primary"
                          >
                            <IconEdit size={22} />
                          </button>
                          <button
                            onClick={() => handleDelete(todo.id)}
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
        );
    }
}

TodoList.propTypes = {
    todos : PropTypes.array,
    handleDelete : PropTypes.func,
    handleEdit : PropTypes.func
}

export default TodoList