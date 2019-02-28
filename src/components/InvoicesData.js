import React, { Component } from 'react';

class InvoicesData extends Component {
    render(){
        return(
            <tr key={this.props.id}>
                <td>{this.props.date_created}</td>
                <td>{this.props.number}</td>
                <td>{this.props.date_supply}</td>
                <td>{this.props.comment}</td>
            </tr>
        )
    }
}

export default InvoicesData;