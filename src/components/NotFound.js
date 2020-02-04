import React from "react";
import error from "../images/error.png";

function NotFound() {
  return (
    <div id="notFound">
      <p>You were not found!</p>
      <img src={error} alt="Not Found!"></img>
    </div>
  );
}

export default NotFound;
