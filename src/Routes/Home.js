import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import HeroSection from "../HeroSection"
import Specials from "../Components/Specials"
import { useState, useEffect } from "react"
import ReservationList from '../ReservationList'

// the useState hook is used to update values and make the browser interactive
// the MAP method cycles through objects in an array

export default function Home() {

const [reservations, setReservations] = useState(null);

  // this hook fires upon each re-render (delete, refresh, etc.)
  useEffect(() => {
    fetch("http://localhost:8000/reservations")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setReservations(data)
      })
  }, []);

  return (
    <>
        <Header />
        <HeroSection />
        <Specials />
        <Footer />
      <div>
        {reservations && <ReservationList reservations={reservations} title="All Reservations!"/>}
      </div>
    </>
  );
}
