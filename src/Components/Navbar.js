// import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Mobile Compare</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/compare">Compare</Link>
      </div>
    </nav>
  );
};

export default Navbar;

