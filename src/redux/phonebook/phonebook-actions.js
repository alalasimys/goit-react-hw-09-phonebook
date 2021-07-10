import { ADD, DELETE, FILTER } from "./phonebook-types";
import { v4 as uuidv4 } from "uuid";

export const addContact = (name, number) => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = (contactId) => ({
  type: DELETE,
  payload: contactId,
});

export const changeFilter = (value) => ({
  type: FILTER,
  payload: value,
});
