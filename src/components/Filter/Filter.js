import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./Filter.module.css";
import { phonebookSelectors, changeFilter } from "../../redux/phonebook";
import Form from "react-bootstrap/Form";

const Filter = ({ value, onChange }) => (
  <Form.Group size="sm" className="mb-3">
    {/* <Form.Label>Find contacts by name</Form.Label> */}
    <Form.Control
      placeholder="Find contacts by name"
      className={styles.inputValue}
      type="text"
      value={value}
      onChange={onChange}
    />
  </Form.Group>
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
