import React, { Component } from "react";
import PropTypes from "prop-types";
//Components
import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";
import { connect } from "react-redux";
import { fetchContacts, phonebookSelectors } from "../../redux/phonebook";
import "./ContactsView.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export class ContactsView extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    fetchContacts: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="Phonebook">
        <div className="flex-item">
          <h2 className="ContactsView__header">Phonebook</h2>
          <ContactForm />
        </div>
        <div className="flex-item">
          <h2 className="ContactsView__header">Contacts</h2>
          <Filter />
          {this.props.isLoading && (
            <Loader
              className="Loader"
              type="Grid"
              color="#c6538c"
              height={100}
              width={100}
            />
          )}
          <ContactList />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
