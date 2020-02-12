// below function creates an action and returns it
// handleLogin is coming from Login.js

import { checkCredentials, getRecords, authoriseUser } from "../lib/helpers";

export const auth = payload => {
  return async dispatch => {
    const data = await authoriseUser();
    dispatch({
      type: "HANDLE_LOGIN",
      payload: data
    });
  };
};

export const handleLogin = payload => {
  return async dispatch => {
    const data = await checkCredentials(payload);
    dispatch({
      type: "HANDLE_LOGIN",
      payload: data
    });
  };
};

export const logOut = payload => {
  return {
    type: "HANDLE_LOGOUT",
    payload
  };
};

export const fetchRecords = payload => {
  return async dispatch => {
    const data = await getRecords();
    dispatch({
      type: "FETCH_RECORDS",
      payload: data
    });
  };
};
