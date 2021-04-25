import React from 'react';

class ForceUpdateDemo extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
        this.pushItem = this.pushItem.bind(this);
        this.popItem = this.popItem.bind(this);
        this.updateItemView = this.updateItemView.bind(this);
    }
    
    pushItem() {
        var item = "item > ";
        this.state.data.push(item);
        console.log("Item Count : "+this.state.data.length);
    }

    popItem() {
        this.state.data.pop();
        console.log("Item Count : "+this.state.data.length);
    }

    updateItemView() {
        this.forceUpdate();
    }

    render() {
        return(
            <div>
                <h1>forceUpdate</h1>
                <button onClick = {this.pushItem}>push item</button>
                <button onClick = {this.popItem}>pop item</button>
                <button onClick = {this.updateItemView}>update item view</button>
                <h3>{this.state.data}</h3>
            </div>
        )
    }
}

export default ForceUpdateDemo;
