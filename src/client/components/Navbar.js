import React from "react";

const Navbar = () => {
  return (
    <nav className="navigation">
      <a href="/" className="navigation__logo">
        <img
          src="assets/images/logo.png"
          alt="logo"
          className="navigation__logo__item"
        />
      </a>
    </nav>
  );
};

export default Navbar;