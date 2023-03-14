import React from 'react';
import Mario from "../Components/Assets/Mario.webp"
import Luigi from "../Components/Assets/Luigi1.png"

export default function About() {
  return (
    <>
    <div class="about-us">
    <h1>Meet our Owners</h1>
      <div class="info-container">
        <img src={ Mario } alt="Owners" width="350"/>
          <div class="characters">
            <div class="mario">
              <h2>Mario</h2>
              <p>The main hero of the Mushroom Kingdom. Mario is always bright and cheerful and instantly recognizable with his blue overalls, red cap, and trademark moustache.<br></br>He's a trusted friend of Princess Peach, and he and his brother Luigi are known across the land for their acts of bravery.<br></br>Mario excels at sports including tennis, golf, baseball, soccer, and even kart racing. He's good at all of them! He's a plumber by profession but is really a jack of all trades.<br></br>He uses his masterful jumping ability and a variety of power-ups to take on his archrival, Bowser.</p>
            </div>
            <div class="luigi">
              <h2>Luigi</h2>
              <p>Mario's brother and fellow hero of the Mushroom Kingdom. Luigi is instantly recognizable in his trademark green hat and green shirt.<br></br>Luigi is kind but can be a bit nervous, especially around ghosts. However, his abilities are on par with Mario's, so when these brothers team up, there's nothing they can't achieve.<br></br>Luigi is taller and can jump higher than Mario. If you look closely, you may also notice that the shape of his moustache is a bit different as well.<br></br></p>
            </div>
          </div>
          <img src={ Luigi } alt="Owners" width="350"/>
      </div>
    </div>
    </>
  )
}
