import React from 'react';
import './Randomitembtn.css'

const Randomitembtn = (props) => {
    //console.log(props);

    return (
        <div>
            <button onClick={props.getRandomItem} className="choose-btn1" >
                <p>choose 1 for me</p>
            </button>
            <h3>You Got:{props.random.name}</h3>

        </div>
    );
};

export default Randomitembtn;