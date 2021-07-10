import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebook-reducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
