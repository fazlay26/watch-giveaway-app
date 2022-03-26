
import { useState } from 'react';
import AddedItems from '../AddedItems/AddedItems';
import Randomitembtn from '../Randomitembtn/Randomitembtn';
import RemoveItems from '../RemoveItems/RemoveItems';
import './SelectedProducts.css'

const SelectedProducts = (props) => {
    const [random, setrandom] = useState({})
    const [remove, setRemove] = useState([])
    //console.log(remove);
    const cart = props.cart
    //console.log(cart);
    const getRandomItem = () => {
        let randItem = cart[Math.floor(Math.random() * cart.length)];
        //console.log(randItem);
        let newRandom = { ...random, randItem }
        setrandom(newRandom.randItem)
        //console.log(newRandom.randItem.name);
    }
    const removeSelectItem = () => {
        const cart = props.cart
        let arr = [...remove, cart]
        setRemove([])
        console.log(arr);


        console.log('remove', cart);
    }
    //let singleItemName;


    // for (const singleItem of cart) {
    //     //console.log(singleItem.name);
    //     singleItemName = singleItem.name
    // }

    return (
        <div className='selected-products'>
            <h2>Selected Products</h2>
            {
                cart.map(singleCart => <AddedItems key={singleCart.id} singleCart={singleCart} ></AddedItems>)

            }
            <div className='choose-btn'>
                {/* <button onClick={getRandomItem} className='choose-btn1'><p>Choose 1 for me</p></button> */}

                <Randomitembtn getRandomItem={getRandomItem}
                    random={random}
                ></Randomitembtn>
                <br />
                <br />
                {/* <button onClick={removeSelectItem} className='choose-btn2'><p>Choose Again</p></button> */}
                <RemoveItems removeSelectItem={removeSelectItem}
                    remove={remove}></RemoveItems>
            </div>


        </div>
    );
};

export default SelectedProducts;