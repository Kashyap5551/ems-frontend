import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a
              href="https://ems-appication-frontend.herokuapp.com/"
              className="navbar-brand m-4"
            >
              Employee Manager
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
