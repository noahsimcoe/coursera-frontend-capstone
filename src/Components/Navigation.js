import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"

export default function Navigation() {
  return (
    <>
      <nav>
          <ul className="links">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/about"> About Us </Link></li>
                <li><Link to="/menu"> Menu </Link></li>
                <li><Link to="/reservations"> Reservations </Link></li>
                <li><Link to="/orderonline"> Order Online </Link></li>
                <li><Link to="/cart">
                  <ShoppingCart size={25}/>
                </Link></li>
          </ul>
        </nav>
    </>
  )
}
