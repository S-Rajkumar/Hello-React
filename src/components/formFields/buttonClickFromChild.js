import React from 'react';

class ButtonClickFromChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
        this.updateData = this.updateData.bind(this);
    }

    updateData() {
        const dataField = document.getElementById('dataFieldChild').value;
        this.setState({
            data: dataField
        })
    }

    render() {
        return(
            <ButtonClickFromChildBody updateData = {this.updateData} data = {this.state.data} id = "dataFieldChild" />
        );
    }
}

class ButtonClickFromChildBody extends React.Component {
    render() {
        return(
            <div>
                <input type = "text" id = {this.props.id} />
                <button onClick = {this.props.updateData}>update data</button>
                <p>data : {this.props.data}</p>
            </div>
        )
    }
}

export default ButtonClickFromChild;