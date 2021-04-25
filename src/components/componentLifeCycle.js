import React from 'react';

class ComponentLifeCycle extends React.Component {
    constructor() {
        super();
        this.state = {
            newNumber: 0
        }

        this.updateNewNumber = this.updateNewNumber.bind(this);
    }

    updateNewNumber() {
        this.setState({
            newNumber: this.state.newNumber + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Component Life Cycle</h1>
                <p>see console for more details about component life cycle.</p>
                <button onClick = {this.updateNewNumber}>update Number</button>
                <LifeCycleDemo number = {this.state.newNumber} />
            </div>
        )
    }
}

class LifeCycleDemo extends React.Component {
    componentWillMount(){
        console.log("!!!!!componentWillMount!!!!! \n componentWillMount is executed before rendering, on both the server and the client side.\n");
    }

    componentDidMount(){
        console.log("!!!!!componentDidMount!!!!! \n componentDidMount is executed after the first render only on the client side.\n");
    }

    componentWillReceiveProps(newProps) {
        console.log("!!!!!componentWillReceiveProps!!!!! \n componentWillReceiveProps is invoked as soon as the props are updated before another render is called. \n received New Props : Number = "+newProps.number+"\n");
    }

    shouldComponentUpdate(newProps, newState){
        console.log("!!!!!shouldComponentUpdate!!!!! \n shouldComponentUpdate should return true or false value. This will determine if the component will be updated or not.\n if Number == 3 will not update because this function return false.\n");
        if( newProps.number === 3){
            console.log("********************************************************************");
            return false;
        }
        return true;
    }

    componentWillUpdate() {
        console.log("!!!!!componentWillUpdate!!!!! \n componentWillUpdate is called just before rendering.\n");
    }

    componentDidUpdate() {
        console.log("!!!!!componentDidUpdate!!!!! \n componentDidUpdate is called just after rendering\n");
        console.log("********************************************************************");
    }

    componentWillUnmount() {
        console.log("!!!!!componentWillUnmount!!!!! \n componentWillUnmount is called after the component is unmounted from the dom\n");
    }

    render() {
        return(
            <div>
                <p>Number : {this.props.number}</p>
            </div>
        )
    }
}

export default ComponentLifeCycle;