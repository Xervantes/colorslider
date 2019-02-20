import React from 'react';
import './ColorBrowser.css';

const ColorSlider = (props) => {

    return (
        <div>
            <label style={{color: props.colorName}}>{props.colorName}</label>
            <input className='slider' onChange={props.cb} type='range' min='0' max='255' name={props.colorName} defaultValue={props.value}></input>
            {/*another way to pass call the CB with params*/}
            {/*onChange={((event) => cb(colorName, event.target.value) )}*/}
            <label>{props.value}</label>
        </div>
    );
};

export default ColorSlider;