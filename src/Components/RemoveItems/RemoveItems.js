import React from 'react';
import './RemoveItems.css'

const RemoveItems = (props) => {
    return (
        <div>
            <button onClick={props.removeSelectItem}><p>Choose Again</p></button>

        </div>
    );
};

export default RemoveItems;