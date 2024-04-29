import { IconTrash } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
import { getTodoAction, deleteTodoAction, selectedTodo } from "../slice/TodoSlice.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Loading from "../../../shared/Loading/Loading.jsx";

function TodoList() {
  //mirip dengan mapStateToProps (mirip)
  const { todos, isLoading } = useSelector((state) => state.todo);

  //mirip dengan mapDispatchToProps (mirip)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoAction());
  }, [dispatch]);

  if (isLoading) {
    return <Loading/>;
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
            {todos?.map((todo, idx) => {
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
                        onClick={() => dispatch(selectedTodo(todo.id))}
                        className="btn btn-primary"
                      >
                        <IconEdit size={22} />
                      </button>
                      <button
                        onClick={() => dispatch(deleteTodoAction(todo.id))}
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

export default TodoList;
