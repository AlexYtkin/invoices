import INVOICES from "../db";

let invoices = INVOICES;
//console.log(invoices);

const invoice = ((state=invoices, action)=>{
    switch (action.type){
        case 'ADD_INVOICE':
            return [...state, action.data];
        default:
            return state;
    }
})

export default invoice;