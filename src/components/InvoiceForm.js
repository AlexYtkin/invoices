import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
const uuidV4 = require('uuid/v4');

class InvoiceForm extends Component {
    idGenerate = () => {
        let id = uuidV4();
        id = id.toString().replace(/[-]/g, "");
        id = id.toString().substr(id.toString().length - 24);
        return id;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const number = this.getNumber.value;
        const invoiceDate = this.getInvoiceDate.value;
        const supplyDate = this.getSupplyDate.value;
        const comment = this.getComment.value;
        const data = {
            id: this.idGenerate(),
            direction: uuidV4(),
            number,
            invoiceDate: moment(invoiceDate).format('DD MMM YYYY'),
            supplyDate: moment(supplyDate).format('DD MMM YYYY'),
            comment
        }
        this.props.dispatch({type: 'ADD_INVOICE', data});
        this.getNumber.value = '';
        console.log(data);
    }

    render(){
        return(
            <div>
                <h1>Create Invoice</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputNumber">Number:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">@</div>
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                           id="Number"
                                           placeholder="Number"
                                           ref={(input)=>{this.getNumber = input}}/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputInvoiceDate">Invoice Date:</label>
                                <input type="date"
                                       className="form-control"
                                       id="invoiceDate"
                                       placeholder="Select date"
                                       ref={(input)=>{this.getInvoiceDate = input}}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputSupplyDate">Supply Date:</label>
                                <input type="date"
                                       className="form-control"
                                       id="inputSupplyDate"
                                       placeholder="Select date"
                                       ref={(input)=>{this.getSupplyDate = input}}/>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="inputComment">Comment:</label>
                                <input type="text"
                                       className="form-control"
                                       id="inputComment"
                                       ref={(input)=>{this.getComment = input}}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Save</button>
                </form>
            </div>
        )
    }
}
export default connect()(InvoiceForm);