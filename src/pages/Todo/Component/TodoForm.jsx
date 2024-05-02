import { IconDeviceFloppy } from "@tabler/icons-react";
import { postTodoAction, selectedTodo, updateTodoAction } from "../slice/TodoSlice.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TodoForm() {
  const [form, setForm] = useState({
    id: "",
    task: "",
    description: "",
    status: false,
  });

  const [errors, setErrors] = useState({
    task: "",
    description: "",
  });

  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo) {
      setForm(todo);
    }
  }, [todo]);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleChangeStatus = (event) => {
    setForm((prev) => {
      return {
        ...prev,
        status: event.target.checked,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (!form.task) {
      errors.task = "Tugas Wajib Di Isi";
    }

    if (!form.description) {
      errors.description = "Deskripsi Wajib Di Isi";
    }

    setErrors(errors);

    if (Object.keys(errors).length > 0) return;

    if (form.id) {
      const todo = { ...form };
      // this.props.update(todo);
      dispatch(updateTodoAction(todo));
    } else {
      const todo = {
        ...form,
        id: new Date().getMilliseconds().toString(),
      };
      dispatch(postTodoAction(todo));
    }
    clearForm();
    navigate("/todos");
  };

  const clearForm = () => {
    setForm(() => {
      return  {id: "",
        task: "",
        description: "",
        status: false,
      }
    },() => dispatch(selectedTodo(null))
    );
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="shadow sm p-4 rounded-2"
    >
      <h3>Form Todo</h3>

      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Tugas
        </label>
        <input
          onChange={handleChange}
          type="text"
          className={`form-control mb-4 ${errors.task && `is-invalid`}`}
          id="task"
          name="task"
          value={form.task}
        />
        {errors.task && <div className="invalid-feedback">{errors.task}</div>}

        <label htmlFor="description" className="form-label">
          Deskripsi
        </label>
        <textarea
          onChange={handleChange}
          className={`form-control mb-4 ${errors.description && `is-invalid`}`}
          name="description"
          id="description"
          rows="3"
          value={form.description}
        ></textarea>
        {errors.description && (
          <div className="invalid-feedback">{errors.description}</div>
        )}
      </div>
      <div className="form-check">
        <input
          onChange={handleChangeStatus}
          type="checkbox"
          className="form-check-input"
          id="status"
          checked={form.status}
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
          onClick={clearForm}
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

export default TodoForm;
