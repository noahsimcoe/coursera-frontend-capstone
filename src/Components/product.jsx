import React, { useContext } from 'react'
import { ShopContext } from "./Context/shop-context"

export const Product = (props) => {
    const {id, image, title, price, description} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]

  return (
    <div className="product">
        <img src={image} />
        <div className="description">
            <p><b>{title}</b></p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
        <button className="AddToCartButton" onClick={() => addToCart(id)}>
            Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
    </div>
  );
};

