import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./Filter.module.css";
import { phonebookSelectors, changeFilter } from "../../redux/phonebook";

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

const mapStateToProps = (state) => ({
  value: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
