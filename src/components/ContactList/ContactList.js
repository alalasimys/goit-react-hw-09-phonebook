import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-operations";
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

const getCurrentContacts = (allContacts, filter) => {
  const normalizeFilterRequest = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizeFilterRequest)
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getCurrentContacts(contacts, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
