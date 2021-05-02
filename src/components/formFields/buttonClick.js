import React from 'react';

class ButtonClick extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : ""
        }
        this.updateData = this.updateData.bind(this);
    }

    updateData() {
        const dataValue = document.getElementById('dataField').value;
        this.setState({
            data: dataValue
        });
    }

    render() {
        return(
            <div>
                <input type = "text" id = "dataField" />
                <button onClick = {this.updateData}>update data</button>
                <p>data : {this.state.data}</p>
            </div>
        )
    }
}

export default ButtonClick;