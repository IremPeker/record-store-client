const initialState = {
  isLoggedIn: false
};

// action is coming from actions folder
const mainReducer = (state = initialState, action) => {
  if (action.type === "HANDLE_LOGIN") {
    // WE MAKE AN API CALL
  }
  return false;
};

export default mainReducer;
