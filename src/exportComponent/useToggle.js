import React from 'react'
// don't work cause I don't know enough

class ToggleTry extends React.Component {
    constructor(props){
        super(props)
        this.state = { isToggleOn: true };

        // this binding is necesary to make 'this' work in the callback
    }
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default ToggleTry;
