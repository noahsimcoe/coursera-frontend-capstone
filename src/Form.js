import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [occasion, setOccasion] = useState("Select Occasion");
    const [guests, setGuests] = useState("");
    const [waiter, setWaiter] = useState("");
    const [datetime, setDatetime] = useState("");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from refreshing
        const reservation = { name, email, phone, occasion, guests, waiter, datetime };

        setIsPending(true);

        fetch("http://localhost:8000/reservations", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reservation)
        }).then(() => {
            console.log("New reservation submitted")
            setIsPending(false);
            // history.go(-1); //going back 1 page through "history"
            // history.push("/"); //going to specific pages
            // apparently history no longer works so I will be using "navigate"
            navigate('/home'); // user is moved to the home page after submitting the form
        });
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
                    <label>Phone Number</label>
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
                {!isPending && <button type="submit">Reserve</button>}
                {isPending && <button disabled type="submit">Addinf reservation...</button>}
            </div>
        </form>
    </>


  )
}