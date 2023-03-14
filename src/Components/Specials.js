import React from 'react'
import SpecialsCard from "./SpecialsCard"

export default function Specials() {
  return (
    <>
        <div class="specials">
            <h2>This week's Specials!</h2><a href="/menu"><button>Online Menu</button></a>
        </div>
        <SpecialsCard />
    </>
  )
}
