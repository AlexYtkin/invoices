import React, { Component } from 'react';
import { connect } from 'react-redux';
import InvoicesData from './InvoicesData';

class Invoices extends Component {
    render(){
        console.log(this.props.invoices);
        let invoices = this.props.invoices.map((invoice)=>{
            return <InvoicesData
                key={invoice.id}
                date_created={invoice.date_created}
                number={invoice.number}
                date_supply={invoice.date_supply}
                comment={invoice.comment}
                />
        })
        return(
            <div>
                <h1>Invoices</h1>
                <button type="button" className="btn btn-primary">Add new</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Create</th>
                            <th scope="col">No</th>
                            <th scope="col">Supply</th>
                            <th scope="col">Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        invoices: state
    }
};

export default connect(mapStateToProps)(Invoices);