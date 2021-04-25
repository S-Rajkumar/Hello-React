import React from 'react';
import ReactDOM from 'react-dom';

class FindDOMNodeDemo extends React.Component {
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
        var itemView = document.getElementById("itemView");
        ReactDOM.findDOMNode(itemView).innerHTML = this.state.data.join('');
    }

    render() {
        return(
            <div>
                <h1>find DOM Node</h1>
                <button onClick = {this.pushItem}>push item</button>
                <button onClick = {this.popItem}>pop item</button>
                <button onClick = {this.updateItemView}>update item view</button>
                <h3 id = "itemView"> </h3>
            </div>
        )
    }
}

export default FindDOMNodeDemo;
