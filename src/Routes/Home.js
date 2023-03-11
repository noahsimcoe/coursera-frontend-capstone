import React from 'react'
import HeroSection from "../HeroSection"
import Specials from "../Components/Specials"
import ReservationList from '../Components/ReservationList'
import useFetch from '../useFetch'

// the useState hook is used to update values and make the browser interactive
// the MAP method cycles through objects in an array

export default function Home() {
  // the "data" in this usage is renamed as "reservations"
  const { data: reservations, isPending, error } = useFetch("http://localhost:8000/reservations");

  return (
    <>
        <HeroSection />
        <Specials />
      <div>
        { error && <div> {error }</div>}
        { isPending && <div>Loading...</div> }
        {reservations && <ReservationList reservations={reservations} title="All Reservations!"/>}
      </div>
    </>
  );
}
