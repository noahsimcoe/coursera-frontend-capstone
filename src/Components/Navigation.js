import React from 'react';
import Lemon from "../Components/Assets/Lemon.jpg"

export default function Navigation() {
  return (
    <>
      <div>
          <img id="logo1" src={Lemon} alt="lemon" height="75"/>
          <img id="logo2" src={Lemon} alt="lemon" height="75"/>
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
