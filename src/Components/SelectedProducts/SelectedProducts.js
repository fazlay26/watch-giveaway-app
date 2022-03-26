
import AddedItems from '../AddedItems/AddedItems';
import Randomitembtn from '../Randomitembtn/Randomitembtn';
import RemoveItems from '../RemoveItems/RemoveItems';
import './SelectedProducts.css'

const SelectedProducts = (props) => {
    //const [random, setrandom] = useState({})1
    //console.log(random);
    const cart = props.cart
    //console.log(cart);
    // const getRandomItem = () => {
    //     let randItem = cart[Math.floor(Math.random() * cart.length)];
    //     //console.log(randItem);
    //     let newRandom = { ...random, randItem }
    //     setrandom(newRandom.randItem)
    //     //console.log(newRandom.randItem.name);
    // }2
    // const removeRandom = () => {
    //     setrandom({})
    // }3

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