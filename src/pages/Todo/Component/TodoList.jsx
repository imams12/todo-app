import { IconTrash } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
import { Component } from "react";
import PropTypes from 'prop-types';
import {remove, selectedTodo} from "../slice/TodoSlice.js";
import {connect} from "react-redux";
import { getTodoAction, deleteTodoAction } from "../slice/TodoSlice.js";
import Loading from "../../../shared/Loading/Loading.jsx"

class TodoList extends Component{
  componentDidMount(){
    this.props.getTodoAction();
  }

  handleDelete = (id) => {
    if (!confirm("Apakah Yakin Ingin Menghapus Data Tersebut?")) return;
    // this.props.remove(id);
    this.props.deleteTodoAction(id);
  };

    render(){
        let{
            todos,
            isLoading            
        } = this.props

        if(isLoading){
          return <Loading/>
        }

        if(todos === undefined){
          todos = [];
        }
        return (
            <div className="shadow-sm p-4 rounded-2 mt-4">
              <h3>List Todo</h3>
                <div className="table-responsive">
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
                            onClick={() => this.props.selectedTodo(todo)}
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
        );
    }
}

TodoList.propTypes = {
    todos : PropTypes.array,
    remove: PropTypes.func,
    selectedTodo : PropTypes.func,
    getTodoAction : PropTypes.func,
    isLoading : PropTypes.bool,
    deleteTodoAction : PropTypes.func,
}

const mapStateToProps = (state) => {
  // state.todo -> obj property dari store.reducer
  // state.todo.todos -> state dari todoSlice
  return{
    todos: state.todo.todos,
    isLoading: state.todo.isLoading,
  }; 
};

//import actions dari slice
const mapDispatchToProps = {
  remove,
  selectedTodo,
  getTodoAction,
  deleteTodoAction,
};

// cara ribet
// const withReduxStore = connect(mapStateprops, null);
// const TodoListComponent = withReduxStore(TodoList);


//shorthand
const TodoListComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListComponent;