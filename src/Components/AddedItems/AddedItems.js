import React from 'react';

const AddedItems = (props) => {
    const { name } = (props.singleCart);
    //console.log(props.singleCart);
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default AddedItems;