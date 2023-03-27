import React, {useContext} from 'react'
import { ShopContext } from './Context/shop-context';
import "./shop.css";

export const CartItem = (props) => {
    const {id, image, title, price, description} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

  return (
    <div className="cartItem">
        <img src={image} />
        <div className="description2">
            <p><b>{title}</b></p>
            <p>{price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
