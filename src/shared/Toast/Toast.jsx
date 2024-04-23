import PropTypes from "prop-types";

function Toast({ message, color }) {
  return (
    <div
      style={{marginTop: '5rem'}}
      className={`position-absolute toast show top-25 end-0 me-4 align-items-center text-bg-${color} text-white border-0`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">
          {message}
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="close"
          ></button>
        </div>
      </div>
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
};

export default Toast;
