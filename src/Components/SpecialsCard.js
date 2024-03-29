import React from 'react'
import IceCream from "../Components/Assets/IceCream.jpg"
import HotFudge from "../Components/Assets/HotFudge.jpg"
import ChocolateCake from "../Components/Assets/ChocolateCake.jpg"

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
                <div className="special-card-item">
                    <div className="dessert-image">
                        <img src={image} alt="dessert" height="200"/>
                    </div>
                    <h3>{title}</h3>
                    <h3 className="price-tag">{price}</h3>
                    <h5>{description}</h5>
                </div>
            </div>
            </>
        )
    })

  return (
    <div className="special-card-container">
        {dessertMenuItems}
    </div>
  )
}
