import React, { useEffect, useState } from 'react';
import Datashow from '../dataShow/Datashow';
import Products from '../products/Products';
import './shop.css';
const Shop = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data=>setData(data))
    } , [])

    const addToCart=(product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        setCount(count -1)

}
    return (
        <div className='shop-container'>
            <div className="procuct-container">
                <h2>Product : {data.length} </h2>
                <h2>Product : {data.length} </h2>
                <h2>Product : {count} </h2>
                
                {
                    data.map(product => <Products  addToCart = {addToCart} key={product.key} product={product}></Products>
                  
                    )
                }
                
            </div>
            <div className="cart-container">
                <Datashow cart={cart} ></Datashow>
            </div>
        </div>
    );
};

export default Shop;