import React from 'react';

import {connect} from 'react-redux';

import {removeGroceryById} from '../actions';

class ShoppingBag extends React.Component{

	getDisplayList(){
		var self = this;
		if(this.props.shoppingBag.length > 0){
			return(
			<ul className="list-group">
			{this.props.shoppingBag.map(function (item){
				return ( <li key={item.id} className="list-group-item"
				onClick={() => self.props.removeGroceryById(item.id)}>
				<b>{item.name}</b> - <span className="badge badge-info"> $ {item.cost}</span>  -   <span className="badge badge-primary">{item.calories} Kcl </span>  - <span className="badge badge-warning">{item.weight} Mg</span></li>
			);
			})}
			</ul>
				)
		}
		else{
			return(
				<ul className="list-group">
				<li className="list-group-item">Purchase some thing in your shopping bag</li>
				</ul>
				)
		}
	}
	

	render(){
		return(
			<div className='col-md-4 shoppingBag-bg'>
			<h2 className="text-center">ShoppingBag Items </h2>
			{this.getDisplayList()}
			</div>
			)
	}
}



function mapStateToProps(state){
return{
	 shoppingBag: state.shoppingBag
}

}

export default connect(mapStateToProps,{ removeGroceryById })(ShoppingBag);
