import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <>
      <div id="navigation">
        <nav>
          <FontAwesomeIcon icon={faBars} />
        </nav>
      </div>
    </>
  );
}

export default Navigation;
