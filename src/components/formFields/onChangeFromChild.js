import React from 'react';

class OnChangeFromChild extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: ""
        }
        this.updateData = this.updateData.bind(this);
    }

    updateData(e){
        this.setState({
            data: e.target.value
        })
    }

    render(){
        return(
            <div>
                <OnChangeFromChildBody data = {this.state.data} updateData = {this.updateData} />
            </div>
        )
    }
}

class OnChangeFromChildBody extends React.Component {
    render() {
        return(
            <div>
                <input type = "text" value = {this.props.data} onChange = {this.props.updateData} />
                <p>data : {this.props.data}</p>
            </div>
        );
    }
}

export default OnChangeFromChild;