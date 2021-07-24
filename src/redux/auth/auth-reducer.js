import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registerSuccess,
  registerError,
  logInSuccess,
  logInError,
  logOutSuccess,
  logOutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [logInSuccess]: (_, { payload }) => payload.user,
  [logOutSuccess]: () => initialState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logOutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [logInError]: (_, { payload }) => payload,
  [logOutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [logInSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [logInError]: () => false,
  [getCurrentUserError]: () => false,
  [logOutSuccess]: () => false,
});

export default combineReducers({ user, token, error, isAuthenticated });
