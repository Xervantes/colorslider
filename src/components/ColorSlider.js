import React from 'react';
import ColorOutput from "./ColorOutput";

const ColorSlider = (props) => {

    return (
        <div>
            <label htmlFor="first">{props.colorName}</label>
            <input onChange={props.cb} type='range' min='0' max='255' name={props.colorName} defaultValue={props.value}></input>
            {/*another way to pass call the CB with params*/}
            {/*onChange={((event) => cb(colorName, event.target.value) )}*/}
            <label htmlFor="first">{props.value}</label>
        </div>
    );
};

export default ColorSlider;