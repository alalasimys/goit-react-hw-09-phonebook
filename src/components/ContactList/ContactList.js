import styles from "./ContactList.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-operations";
import { phonebookSelectors } from "../../redux/phonebook";

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(phonebookSelectors.getCurrentContacts);
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <ListGroup>
      {contacts.map(({ id, name, number }) => (
        <ListGroup.Item className={styles.ContactListItem} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.DeleteBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
