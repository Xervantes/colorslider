import React from 'react';
import './ColorBrowser.css';

const ColorOutput = (props) => {

    const colorSum = Number(props.Red) + Number(props.Green) + Number(props.Blue);
    const textColor = (colorSum > 128*3) ? `black` : `white`;
    const rgbString = `rgb(${props.Red}, ${props.Green}, ${props.Blue})`;
    const theStyle = {
        backgroundColor: rgbString,
        color: textColor
    };


    return (
        <div className='color-output' style={theStyle}>
            <h2>RGB: {props.Red}, {props.Green}, {props.Blue}</h2>
        </div>
    );
};

export default ColorOutput;