import React, {Component} from 'react';
import ColorSlider from "./ColorSlider";
import ColorOutput from "./ColorOutput";

class ColorBrowser extends Component {

    state = {
        Red: 0,
        Green: 0,
        Blue: 0
    }

    updateColorValue = (event) => {
        console.log('Color:', event.target.name);
        console.log('Value:', event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <div>
                <h2>Color Browser</h2>
                <ColorSlider colorName='Red' value={this.state.Red} cb={this.updateColorValue}/>
                <ColorSlider colorName='Green' value={this.state.Green} cb={this.updateColorValue}/>
                <ColorSlider colorName='Blue' value={this.state.Blue} cb={this.updateColorValue}/>
                <ColorOutput Red={this.state.Red} Green={this.state.Green} Blue={this.state.Blue}/>
            </div>
        );
    }
}

export default ColorBrowser;