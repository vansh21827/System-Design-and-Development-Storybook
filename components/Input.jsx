import PropTypes from "prop-types";
import "../styles/input.css";

const Input = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  disabled = false,
  error = "",
  fullWidth = false,
}) => {
  return (
    <div className={`input-group ${fullWidth ? "full-width" : ""}`}>
      {label && <label className="input-label">{label}</label>}

      <input
        className={`input-field ${error ? "input-error" : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />

      {error && <span className="input-error-text">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Input;