import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import { addContact, phonebookSelectors } from "../../redux/phonebook";
class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const { currentContacts, onSubmit } = this.props;

    currentContacts.some(
      (contact) => name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts.`)
      : onSubmit(name, number);

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.FormContainer}>
        <label className={styles.inputLabel}>
          Name
          <input
            className={styles.inputValue}
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.inputLabel}>
          Number
          <input
            className={styles.inputValue}
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currentContacts: phonebookSelectors.getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
