
import AddedItems from '../AddedItems/AddedItems';
import Randomitembtn from '../Randomitembtn/Randomitembtn';
import RemoveItems from '../RemoveItems/RemoveItems';
import './SelectedProducts.css'

const SelectedProducts = (props) => {
    const cart = props.cart

    return (
        <div className='selected-products'>
            <h2>Selected Products</h2>
            {
                cart.map(singleCart => <AddedItems key={singleCart.id} singleCart={singleCart} ></AddedItems>)

            }
            <div className='choose-btn'>

                <Randomitembtn getRandomItem={props.getRandomItem}
                    random={props.random}

                ></Randomitembtn>
                <br />
                <br />
                <RemoveItems removeSelectItem={props.removeSelectItem}
                    removeRandom={props.removeRandom}

                ></RemoveItems>
            </div>


        </div>
    );
};

export default SelectedProducts;