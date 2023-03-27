import React from 'react';
import { PRODUCTS } from "../Components/products"
import { Product } from "../Components/product"
import "../Components/shop.css";

// this is my version of the SHOP page from the youtube tutorial

export default function OrderOnline() {
  return (
    <>
      <div className='shop'>
        <div className='shopTitle'>
          <h1>Noah's Shop</h1>
        </div>
        <div className='products'>
          {PRODUCTS.map((product) => (
          <Product data={product}/>
          ))}
        </div>
      </div>
    </>
  )
}
