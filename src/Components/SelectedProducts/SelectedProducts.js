
import AddedItems from '../AddedItems/AddedItems';
import './SelectedProducts.css'

const SelectedProducts = (props) => {
    const cart = props.cart
    //console.log(cart);
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
                <button className='choose-btn1'><p>Choose 1 for me</p></button>
                <br />
                <br />
                <button className='choose-btn2'><p>Choose Again</p></button>
            </div>


        </div>
    );
};

export default SelectedProducts;