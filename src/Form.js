import React from 'react'
import { useState } from "react";

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [occasion, setOccasion] = useState("Select Occasion");
    const [guests, setGuests] = useState("");
    const [waiter, setWaiter] = useState("");
    const [datetime, setDatetime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const reservation = { name, email, phone, occasion, guests, waiter, datetime };
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <div classname="create">
                    <label>Full Name</label>
                    <input
                        type="text"
                        required
                        placeholder="Johnny Appleseed"
                        value={name} // curly brackets means it's a "dynamic" value
                        onChange={(e) =>  setName(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        required
                        placeholder="Jappleseed6@gmail.com"
                        value={email}
                        onChange={(e) =>  setEmail(e.target.value)}>

                    </input>
                </div>
                <div>
                    <label>Number</label>
                    <input
                        type="tel"
                        required
                        placeholder="233 00 000 0010"
                        value={phone}
                        onChange={(e) =>  setPhone(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label>Occasion</label>
                    <select>
                        value={occasion}
                        onChange={(e) =>  setOccasion(e.target.value)}
                        <option value="select">Select Occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="networking event">Networking Event</option>
                    </select>
                </div>
                <div>
                    <label>Guests</label>
                    <input
                        type="number"
                        required
                        placeholder="2"
                        value={guests}
                        onChange={(e) =>  setGuests(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label>Preferred Waiter</label>
                    <select>
                        value={waiter}
                        onChange={(e) => setWaiter(e.target.value)}
                        <option value="No Preference">No Preference</option>
                        <option value="Toby">Toby</option>
                        <option value="Mario">Mario</option>
                        <option value="Luigi">Luigi</option>
                        <option value="Dry Bones">Dry Bones</option>
                    </select>
                </div>
                <div>
                    <label>Date & Time</label>
                    <input
                        type="datetime-local"
                        required
                        value={datetime}
                        onChange={(e) =>  setDatetime(e.target.value)}>
                    </input>
                </div>
                <button type="submit">Reserve</button>
            </div>
        </form>
    </>


  )
}