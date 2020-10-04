import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <>
    <nav className="navbar navbar-light bg-light mb-5">
      <div className="container">
        <a className="navbar-brand">Yemek.com Code Challenge</a>
      </div>
    </nav>
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
