import React, {useContext} from 'react'
import { PRODUCTS } from '../Components/products';
import { ShopContext } from '../Components/Context/shop-context';
import { CartItem} from "../Components/cart-item"
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';

export default function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    const roundedTotalAmount = Math.round((totalAmount) * 100) / 100
    // code above rounded the total amount to two deicmals

    const navigate = useNavigate();

    return (
        <div className='cart'>
        <div>
        <h1> Your Cart Items </h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} />;
                }
            })}
        </div>
        {roundedTotalAmount > 0 ? (
        <div className="checkout">
            <p>Subtotal: {roundedTotalAmount} </p>
            <button onClick={() => navigate("/orderonline")}> Continue Shopping </button>
            <button> Checkout </button>
        </div>
        ) : (
            <>
                <h2> Your Cart is Currently Empty </h2>
                <ShoppingCart size="300"/>
                </>
        )}
        </div>
    );
}
