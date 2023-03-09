import React from 'react'


export default function ReservationList({ reservations, title,}) {

    return (
    <div>
        <h2> {title} </h2>
        {reservations.map((x) => (
         <div key={x.id}>
            <h2> {x.title} </h2>
            <p>Written by {x.name}</p>
         </div>
        ))}
    </div>
  )
}
