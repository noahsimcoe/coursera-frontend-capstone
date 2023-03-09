import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import HeroSection from "../HeroSection"
import Specials from "../Components/Specials"
import { useState } from "react"
import ReservationList from '../ReservationList'

// the useState hook is used to update values and make the browser interactive
// the MAP method cycles through objects in an array

export default function Home() {

const [reservations, setReservations] = useState([
  {name: "Noah Simcoe", email: "noahsimcoe@gmail.com", phone: 1234, occasion: "Anniversary", guests: 2, waiter: "Toby", datetime: "7:15pm", id: 1 },
  {name: "Cody White", email: "codywhite@gmail.com", phone: 5678, occasion: "Birthday", guests: 3, waiter: "Mario", datetime: "8:45pm", id: 2 }
]);

  const handleDelete = (id) => {
    const newReservations = reservations.filter(x => x.id !== id)
    setReservations(newReservations)
  }


  return (
    <>
        <Header />
        <HeroSection />
        <Specials />
        <Footer />
      <div>
        <ReservationList reservations={reservations} title="All Reservations!" handleDelete={handleDelete}/>
        <ReservationList reservations={reservations.filter((x) => x.name === "Noah Simcoe")} title="Noah's Reservations"/>
      </div>
    </>
  );
}
