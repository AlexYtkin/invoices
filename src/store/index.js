import { createStore } from 'redux';
import invoice from '../reducers/invoice';

const store = createStore(invoice);

store.subscribe(()=>{
    console.log('subscribe', store.getState());
})

export default store;