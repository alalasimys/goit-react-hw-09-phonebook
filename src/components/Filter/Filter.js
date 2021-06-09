import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <label className={styles.inputLabel}>
    Find contacts by name
    <input
      className={styles.inputValue}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
