//imports
import { createStore, combineReducers } from 'redux'

//my reducers
import tour from './src/reducers/tourReducers';
import agency from './src/reducers/agencyReducer';
//import price from './src/reducers/priceReducer';

//combine my reducers
const rootReducer = combineReducers( {
    tourReducer : tour,
    agencyReducer: agency
    //priceReducer: price
} );

//create and config my store
const configStore = () => {
    return createStore( rootReducer );
}

//export it
export default configStore;