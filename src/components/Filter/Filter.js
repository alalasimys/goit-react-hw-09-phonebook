import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Filter.module.css";
import { phonebookSelectors, changeFilter } from "../../redux/phonebook";
import Form from "react-bootstrap/Form";

export default function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(phonebookSelectors.getFilter);
  const onChange = useCallback(
    (e) => dispatch(changeFilter(e.target.value)),
    [dispatch]
  );

  return (
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
}
