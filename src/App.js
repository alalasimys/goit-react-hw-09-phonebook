import { Component } from "react";

//Components
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

//Styles
import "./styles.css";

class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const currentContacts = this.state.contacts;
  //   const previousContacts = prevState.contacts;
  //   if (currentContacts !== previousContacts) {
  //     localStorage.setItem("contacts", JSON.stringify(currentContacts));
  //   }
  // }

  // addContact = (name, number) => {
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };
  //TODO :
  //   this.state.contacts.some(
  //     (contact) => name.toLowerCase() === contact.name.toLowerCase()
  //   )
  //     ? alert(`${name} is already in contacts.`)
  //     : this.setState((prevState) => ({
  //         contacts: [contact, ...prevState.contacts],
  //       }));
  // };

  render() {
    return (
      <div className="Phonebook">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    );
  }
}

export default App;
