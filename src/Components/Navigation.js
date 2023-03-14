import React from 'react';
import Logo from "../Components/Assets/Logo.jpg"

export default function Navigation() {
  return (
    <>
      <div>
          <img id="logo1" src={Logo} alt="littlelemon" height="75"/>
        <nav class="nav-bar">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderonline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
      </div>
    </>
  )
}
