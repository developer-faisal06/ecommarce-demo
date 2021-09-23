import React from 'react';
import { useState } from 'react/cjs/react.development';
import './dataShow.css';
const Datashow = (props) => {
    console.log(props.cart);
    const { cart } = props;
    let total = 0;
    for (const products of cart) {
        total = total + products.price;
        console.log(total);
    }

    return (
        <div>
            <h1> im show</h1>
            <h3>Order Summary</h3>
            <h5>items = {props.cart.length }</h5>
            <h5>Total Price = {total.toFixed(2) }</h5>
        </div>
    );
};

export default Datashow;