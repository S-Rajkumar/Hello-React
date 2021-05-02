import React from 'react';
import ReactDOM from 'react-dom';

class RefsDemo extends React.Component {
    /*
    When to Use Refs

    There are a few good use cases for refs:

        Managing focus, text selection, or media playback.
        Triggering imperative animations.
        Integrating with third-party DOM libraries.

    Avoid using refs for anything that can be done declaratively.
    */
    constructor(props){
        super(props);
        this.state = {
            data: ""
        }
        this.updateData = this.updateData.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    updateData(e) {
        this.setState({
            data: e.target.value
        })
    }

    clearData() {
        this.setState({
            data: ""
        });
        ReactDOM.findDOMNode(this.refs.dataFieldRef).focus();
    }

    render() {
        return(
            <div>
                <input type = "text" onChange = {this.updateData} ref = "dataFieldRef" value = {this.state.data} />
                <button onClick = {this.clearData} >clear data</button>
                <p>data : {this.state.data}</p>
            </div>
        )
    }
}

export default RefsDemo;
