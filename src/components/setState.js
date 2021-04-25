import React from 'react';

class SetStateDemo extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
        this.pushItem = this.pushItem.bind(this);
        this.popItem = this.popItem.bind(this);
    }

    pushItem() {
        var item = "item > ";
        this.state.data.push(item);
        this.setState({
            data: this.state.data
        })
    }

    popItem() {
        this.state.data.pop();
        this.setState({
            data: this.state.data
        })
    }

    render() {
        return(
            <div>
                <h1>setState</h1>
                <button onClick = {this.pushItem}>push item</button>
                <button onClick = {this.popItem}>pop item</button>
                <h3>{this.state.data}</h3>
            </div>
        )
    }
}

export default SetStateDemo;
