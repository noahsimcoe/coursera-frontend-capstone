import React from 'react'
import Form from "../Form"

export default function ReservationsPage() {
  return (
    <div>
        <div className="text">
            <h2>Experience the perfect balance of tradition and luxury.</h2>
            <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
            <p>Book a table with us to share in this experience</p>
        </div>
        <div className="form">
            <h2>Reserve a Table</h2>
            <p>Please fill in and submit this form to book your reservation with us.</p>
            <Form />
        </div>
    </div>
  )
}
