import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addContact = createAction("contacts/Add", (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const deleteContact = createAction("contacts/Delete");
export const changeFilter = createAction("contacts/Filter");
