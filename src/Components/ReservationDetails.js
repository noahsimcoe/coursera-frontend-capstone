import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import useFetch from "../useFetch";


export default function ReservationDetails() {
    const { id } = useParams()
    const { data: reservation, error, isPending } = useFetch("http://localhost:8000/reservations/" + id)
    const navigate = useNavigate();

    const handleClick= () => {
        fetch("http://localhost:8000/reservations/" + reservation.id, {
            method: "DELETE"
        }).then(() => {
            navigate("/home");
        })
    }

    return (
    <>
        <Header />
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {reservation && (
                <article>
                    <h2>Reservation ID: {reservation.id}</h2>
                    <p>Booked by <strong>{reservation.name}</strong> at {reservation.datetime}</p>
                    <div>Occasion: {reservation.occasion}</div>
                    <div>Guests: {reservation.guests}</div>
                    <div>Preferred Waiter: {reservation.waiter}</div>
                    <button onClick={handleClick}>Delete Reservation</button>
                </article>
            )}
        </div>
    </>
  )
}
