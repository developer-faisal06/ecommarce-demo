import React from 'react';
import { useState } from 'react/cjs/react.development';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './products.css';
const Products = (props) => {
// console.log(props.product);
    const { name, img, price, stock, seller } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product-div'>
            <div className='product-img'>
                <img src={img} alt="" className='img' />
           </div>
            <div className='product-info' >
                <h4>Name : {name}</h4>
                <h5>by: {seller} </h5>
                <div className="stock-info">
                    <span>price : {price}</span>
                    <p>only {stock} left in stock - order soon</p>
                </div> 
                <button onClick={() => props.addToCart(props.product)} className='regular-btn'> {cartIcon } Add to cart</button>
           </div>
        </div>
    );
};

export default Products;