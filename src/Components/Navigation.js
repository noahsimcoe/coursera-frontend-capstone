import React from 'react';
import Logo from "../Components/Assets/Logo.jpg";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export default function Navigation() {
  return (
    <>
      <div className="navbar">
        <div>
            <img id="logo1" src={Logo} alt="littlelemon" height="75"/>
        </div>
        <div>
              <Link to="/"> Home </Link>
              <Link to="/about"> About Us </Link>
              <Link to="/menu"> Menu </Link>
              <Link to="/reservations"> Reservations </Link>
              <Link to="/orderonline"> Order Online </Link>
              <Link to="/cart">
                <ShoppingCart size={20}/>
              </Link>
        </div>
      </div>
    </>
  )
}
