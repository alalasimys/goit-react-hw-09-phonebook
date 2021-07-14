import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-operations";
import { ContactList } from "./ContactList";
import { phonebookSelectors } from "../../redux/phonebook";

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getCurrentContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
