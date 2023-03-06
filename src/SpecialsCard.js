import React from 'react'
import IceCream from "./Components/Assets/IceCream.jpg"
import HotFudge from "./Components/Assets/HotFudge.jpg"
import ChocolateCake from "./Components/Assets/ChocolateCake.jpg"

export default function SpecialsCard() {

    const dessertMenu = [
        {
            image: IceCream,
            title: "IceCream",
            price: "$4.99",
            description: "This is the best icecream ever"
        },
        {
            image: HotFudge,
            title: "HotFudge",
            price: "$5.99",
            description: "This hotfudge is really, really good"
        },
        {
            image: ChocolateCake,
            title: "Chocolate Cake",
            price: "$6.99",
            description: "You're going to want to try this cake!"
        },
    ]

    const dessertMenuItems = dessertMenu.map(menu => {
        const image = menu.image;
        const title = menu.title;
        const price = menu.price;
        const description = menu.description;

        return (
            <>
            <div>
                <div className="dessert-image">
                    <img src={image} alt="dessert" width="200"/>
                </div>
                <h3>{title} {price}</h3>
                <p>{description}</p>
            </div>
            </>
        )
    })

  return (
    <div>{dessertMenuItems}</div>
  )
}
