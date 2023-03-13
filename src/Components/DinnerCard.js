import React from 'react'
import BeefShwarma from "../Components/Assets/BeefShwarma.jpg"
import BrusselSprouts from "../Components/Assets/BrusselSprouts.jpg"
import ChickenKabob from "../Components/Assets/ChickenKabob.jpg"
import LambKabobs from "../Components/Assets/LambKabobs.jpg"
import PitaHummus from "../Components/Assets/PitaHummus.jpg"
import Salmon from "../Components/Assets/Salmon.jpg"


export default function DinnerCard() {

    const dinnerMenu = [
        {
            image: BeefShwarma,
            title: "Beef Shwarma Plate",
            price: "$9.99",
            description: "Our special shwarma recipe"
        },
        {
            image: BrusselSprouts,
            title: "Brussel Sprouts",
            price: "$5.99",
            description: "Served with the best ricotta cheese"
        },
        {
            image: ChickenKabob,
            title: "Chicken Kabobs",
            price: "$10.99",
            description: "Served with a side of our special cajuin fries!"
        },
        {
            image: LambKabobs,
            title: "Lamb Kabobs",
            price: "$11.99",
            description: "Served with a side of our special cajun fries!"
        },
        {
            image: PitaHummus,
            title: "Pita and Hummus",
            price: "$8.99",
            description: "Includes free hummus refills"
        },
        {
            image: Salmon,
            title: "Salmon Entree",
            price: "$12.99",
            description: "Freshly caught and imported from Madagascar!"
        },
    ]

    const dinnerMenuItems = dinnerMenu.map(menu => {
        const image = menu.image;
        const title = menu.title;
        const price = menu.price;
        const description = menu.description;

        return (
            <>
            <div>
                <div class="dinnerbox">
                    <div className="dinner-image">
                        <img src={image} alt="dinner" height="200"/>
                    </div>
                    <div class="dinnerpics">
                        <h3>{title} <div class="price">{price}</div></h3>
                        <h5>{description}</h5>
                    </div>
                </div>
            </div>
            </>
        )
    })

  return (
    <div className="dinner-card">
        {dinnerMenuItems}
    </div>
  )
}
