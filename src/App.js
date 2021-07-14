//Components
import { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";
import { fetchContacts, phonebookSelectors } from "./redux/phonebook";
//Styles
import "./styles.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="Phonebook">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {this.props.isLoading && <h1>Loading...</h1>}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
