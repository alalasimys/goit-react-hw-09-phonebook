import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.ContactListItem} key={id}>
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
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
