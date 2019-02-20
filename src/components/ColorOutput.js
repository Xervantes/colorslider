import React from 'react';
import './ColorBrowser.css';

const ColorOutput = (props) => {
    return (
        <div className='color-output'>
            <h2>RGB: {props.Red}, {props.Green}, {props.Blue}</h2>
        </div>
    );
};

export default ColorOutput;