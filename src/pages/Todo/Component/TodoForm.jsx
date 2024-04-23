import { IconDeviceFloppy } from "@tabler/icons-react";
import { Component } from "react";
import PropTypes from 'prop-types';

class TodoForm extends Component{
    render(){
        const {
            handleSubmit,
            handleChange,
            handleChangeStatus,
            error,
            form
        } = this.props
        return(
            <div>
                <form onSubmit={handleSubmit} className="shadow sm p-4 rounded-4">
          <h3>Todo</h3>

          <div className="mb-3">
            <label htmlFor="task" className="form-label">
              Tugas
            </label>
            <input
              onChange={handleChange}
              type="text"
              className={`form-control mb-4 ${
                error.task && `is-invalid`
              }`}
              id="task"
              name="task"
              value={form.task}
            />
            {error.task && (
              <div className="invalid-feedback">{error.task}</div>
            )}

            <label htmlFor="description" className="form-label">
              Deskripsi
            </label>
            <textarea
              onChange={handleChange}
              className={`form-control mb-4 ${
                error.description && `is-invalid`
              }`}
              name="description"
              id="description"
              rows="3"
              value={form.description}
            ></textarea>
            {error.description && (
              <div className="invalid-feedback">
                {error.description}
              </div>
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
            </div>
        )
    }
}

TodoForm.propTypes ={
    handleSubmit : PropTypes.func,
    handleChange : PropTypes.func,
    handleChangeStatus : PropTypes.func,
    error : PropTypes.object,
    form : PropTypes.object,
}

export default TodoForm