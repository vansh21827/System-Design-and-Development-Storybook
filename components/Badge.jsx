import PropTypes from "prop-types";
import "../styles/badge.css";

const Badge = ({
  children,
  variant = "primary",
  rounded = true,
}) => {
  return (
    <span
      className={`badge badge-${variant} ${
        rounded ? "badge-rounded" : ""
      }`}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "secondary",
  ]),
  rounded: PropTypes.bool,
};

export default Badge;