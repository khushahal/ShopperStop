import {ADD_GROCERY} from '../actions';
import {REMOVE_GROCERY} from '../actions';

import {addToBag} from './helper';

import groceryItemsList from '../data/groceryItemsList.json';

export default function grocery(state = groceryItemsList , action){

	switch(action.type){
		case ADD_GROCERY:
		let grocery = state.filter(item =>item.id !== action.id);
		return grocery;

		case REMOVE_GROCERY:
		 grocery = [...state, addToBag(action.id)];
		return grocery;

		default:
		return state;

	}
} 

