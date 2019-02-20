import React from 'react';

const ColorOutput = (props) => {
    return (
        <div>
            <h2>RGB: {props.Red}, {props.Green}, {props.Blue}</h2>
        </div>
    );
};

export default ColorOutput;