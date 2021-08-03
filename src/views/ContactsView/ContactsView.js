import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Components
import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";
import { fetchContacts, phonebookSelectors } from "../../redux/phonebook";
import "./ContactsView.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function ContactsView() {
  const dispatch = useDispatch();

  const isLoading = useSelector(phonebookSelectors.getLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className="Phonebook">
      <div className="flex-item">
        <h2 className="ContactsView__header">Phonebook</h2>
        <ContactForm />
      </div>
      <div className="flex-item">
        <h2 className="ContactsView__header">Contacts</h2>
        <Filter />
        {isLoading && (
          <Loader
            className="Loader"
            type="Hearts"
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
