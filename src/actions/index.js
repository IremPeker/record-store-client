// below function creates an action and returns it
// handleLogin is coming from Login.js

export const handleLogin = payload => {
  return {
    type: "HANDLE_LOGIN",
    payload
  };
};
