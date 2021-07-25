import styles from "./ContactList.module.css";
import ListGroup from "react-bootstrap/ListGroup";

export const ContactList = ({ contacts, onDeleteContact }) => {
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
};
