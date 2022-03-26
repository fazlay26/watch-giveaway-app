import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import SelectedProducts from '../SelectedProducts/SelectedProducts';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    //console.log(products);
    const [cart, setCart] = useState([])
    //console.log(cart);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handlerToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)

    }
    const removeSelectItem = () => {
        setCart([])
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Products
                        key={product.id}
                        handlerToCart={handlerToCart}
                        product={product}></Products>)

                }

            </div>
            <div className='selected-products-container'>
                {


                    <SelectedProducts cart={cart}
                        removeSelectItem={removeSelectItem}></SelectedProducts>

                }
            </div>

        </div >
    );
};

export default Shop;