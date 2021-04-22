import React from 'react'

class PersonTable extends React.Component {
    constructor(){
        super();
        this.state = {
            records: [
                {
                    "id": 1,
                    "Name": "Rajkumar S"
                },
                {
                    "id": 2,
                    "Name": "udmnxpdu"
                },
                {
                    "id": 3,
                    "Name": "Time"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <table>
                    <thead><tr><td>ID</td><td>Name</td></tr></thead>
                    <tbody>
                        {this.state.records.map((Me, i) => <TableRow key = {i} record = {Me} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

class TableRow extends React.Component {
    render(){
        return(
            <tr>
                <td>{this.props.record.id}</td>
                <td>{this.props.record.Name}</td>
            </tr>
        )
    }
}

export default PersonTable;