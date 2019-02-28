import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Invoices from './components/Invoices';
import InvoiceForm from './components/InvoiceForm';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
              <Route path="/" component={Invoices}/>
              <Route path="/create_invoice" component={InvoiceForm}/>
          </div>
         </BrowserRouter>
    );
  }
}

export default App;
