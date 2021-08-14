import PropTypes from "prop-types";

export default function Input({ onChange, value }) {
  return <input type="text" onChange={onChange} value={value} />;
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
