import {UPDATE_GROCERY} from '../actions';
import {ADD_GROCERY} from '../actions';

import {addToBag} from './helper';


export default function state(state = [] , action){

	switch(action.type){


		case ADD_GROCERY:
		let grocery = [...state, addToBag(action.id)];
		let totalState = [];
		grocery.forEach(function(item){
			totalState.cost += item.cost;
			totalState.calories += item.calories;
			totalState.weight += item.weight;
		})
		return grocery;

		case UPDATE_GROCERY:
		let currentState = state.filter(item => item.id === action.id);
		return currentState;

		default:
		return state;

	}

}