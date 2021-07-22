import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("auth/registerRequest");
export const registerSuccess = createAction("auth/registerSuccess");
export const registerError = createAction("auth/registerError");

export const logInRequest = createAction("auth/logInRequest");
export const logInSuccess = createAction("auth/logInSuccess");
export const logInError = createAction("auth/logInError");

export const logOutRequest = createAction("auth/logOutRequest");
export const logOutSuccess = createAction("auth/logOutSuccess");
export const logOutError = createAction("auth/logOutError");

export const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
export const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
export const getCurrentUserError = createAction("auth/getCurrentUserError");
