import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import SelectedProducts from '../SelectedProducts/SelectedProducts';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    //console.log(products);
    const [cart, setCart] = useState([])
    //console.log(cart);
    const [random, setrandom] = useState({})
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handlerToCart = (product) => {
        if (cart.includes(product)) {
            alert('you can not add same products')
        }
        else if (cart.length > 3) {
            alert('you can not add more than 4 products')

        }
        else {
            const newCart = [...cart, product]
            setCart(newCart)

        }


    }
    const getRandomItem = () => {
        let randItem = cart[Math.floor(Math.random() * cart.length)];
        //console.log(randItem);
        let newRandom = { ...random, randItem }
        setrandom(newRandom.randItem)
        //console.log(newRandom.randItem.name);
    }
    const removeRandom = () => {
        setrandom({})
    }
    const removeSelectItem = () => {
        setCart([])
        removeRandom()

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
                        removeSelectItem={removeSelectItem}
                        getRandomItem={getRandomItem}
                        removeRandom={removeRandom}
                        random={random}

                    ></SelectedProducts>

                }
            </div>

        </div >
    );
};

export default Shop;