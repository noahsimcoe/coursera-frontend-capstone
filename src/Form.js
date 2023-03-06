import React from 'react'

export default function Form() {

    return (
    <>
        <form>
            <div>
                <div>
                    <label>Full Name</label>
                    <input type="text" placeholder="Johnny Appleseed"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Jappleseed6@gmail.com"></input>
                </div>
                <div>
                    <label>Telephone</label>
                    <input type="tel" placeholder="233 00 000 0010"></input>
                </div>
                <div>
                    <label>Occasion</label>
                    <select name>
                        <option value="select">Select Occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                <div>
                    <label>Guests</label>
                    <input type="number" placeholder="2"></input>
                </div>
                <div>
                    <label>Date & Time</label>
                    <input type="datetime-local"></input>
                </div>
                <button type="submit">Reserve</button>
            </div>
        </form>
    </>


  )
}
