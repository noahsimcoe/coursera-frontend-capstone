import React from 'react'
import Bruschetta from "./Components/Assets/Bruschetta.jpg"

export default function HeroSection () {


  return (
    <>
        <div class="herosection">
            <div class="herowords">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>We are a family owned Mediterranean <br></br>restaurant, focused on traditional recipes <br></br> served with a modern twist.</p>
              <a href="/reservations">
              <button>Reserve a Table</button></a>
            </div>
            <div class="heropicture">
            <img id="logo1" src={Bruschetta} alt="bruschetta" height="275"/>
            </div>
        </div>
    </>
  )
}
