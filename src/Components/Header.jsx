import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  //subscribing the store using the selector
  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
