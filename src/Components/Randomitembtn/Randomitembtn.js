import React from 'react';
import './Randomitembtn.css'

const Randomitembtn = (props) => {
    //console.log(props.random);

    return (
        <div>
            <button onClick={props.getRandomItem} className="choose-btn1" >
                <p>choose 1 for me</p>
            </button>
            <h4>You Got:{props.random.name}</h4>

        </div>
    );
};

export default Randomitembtn;