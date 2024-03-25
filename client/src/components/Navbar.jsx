import React from "react";
import Logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=investment">
            <h6>INVESTMENT</h6>
          </Link>
          <Link className="link" to="/?cat=trading">
            <h6>TRADING</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cenema">
            <h6>CENEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>Majhi</span>
          <span>Logout</span>
          <span className="write">
            <Link to="/create">Create</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
