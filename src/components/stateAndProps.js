import React from 'react';

class StateAndPropsDemo extends React.Component {
    render(){
        return(
            <div>
                <StateDemo />
                <PropsDemo title = {this.props.title} />
            </div>
        )
    }
}

class StateDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            title : "state",
            description : "state are mutable and it's used in container components"
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
            </div>
        )
    }
}

class PropsDemo extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

PropsDemo.defaultProps = {
    description : "props are immutable and used it's used in child components"
}

export default StateAndPropsDemo;