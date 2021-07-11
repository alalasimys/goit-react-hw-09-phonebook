import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebook-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const contactsPersistConfig = {
  key: "root",
  storage,
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: persistReducer(contactsPersistConfig, phonebookReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
