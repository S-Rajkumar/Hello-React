import React from 'react';

class OnChange extends React.Component {
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
        });
    }

    render() {
        return(
            <div>
                <input type = "text" value = {this.state.data} onChange = {this.updateData} />
                <p>data : {this.state.data}</p>
            </div>
        )
    }
}

export default OnChange;