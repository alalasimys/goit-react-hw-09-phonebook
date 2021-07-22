import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.phonebook.loading;

const getFilter = (state) => state.phonebook.filter;

const getAllContacts = (state) => state.phonebook.contacts;

const getCurrentContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizeFilterRequest = filter.toLowerCase();

    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilterRequest)
    );
  }
);

const phonebookSelectors = {
  getLoading,
  getFilter,
  getCurrentContacts,
  getAllContacts,
};

export default phonebookSelectors;
