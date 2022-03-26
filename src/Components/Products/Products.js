import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const { name, image, price } = props.product
    return (
        <div className='single-product'>
            <img src={image} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price:${price}</p>
            </div>
            <button onClick={() => props.handlerToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Products;