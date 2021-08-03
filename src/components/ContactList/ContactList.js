import styles from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-operations";
import { phonebookSelectors } from "../../redux/phonebook";

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(phonebookSelectors.getCurrentContacts);
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.ContactListItem} key={id}>
          <p className={styles.ContactListContact}>
            <span className={styles.ContactListContactName}>{name}:</span>{" "}
            {number}
          </p>
          <button
            className={styles.DeleteBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
