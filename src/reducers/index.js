import  grocery  from './grocery_reducer';

import shoppingBag from './shoppingBag_reducer';

import state from './states_reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	grocery,shoppingBag,state
});

export default rootReducer;

