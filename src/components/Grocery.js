import React from 'react';

import {connect} from 'react-redux';

import {addGroceryById} from '../actions';

class Grocery extends React.Component{

	render(){
		return(
			<div className='col-md-4 grocery-bg'>
			<h2 className="text-center">Grocery Items </h2>
			<ul className="list-group">
			{this.props.Grocery.map((item) => {
				return (<li key={item.id} className="list-group-item"
				onClick={()=> this.props.addGroceryById(item.id)}>
				<b>{item.name}</b> - <span className="badge badge-info"> $ {item.cost}</span>  -  <span className="badge badge-primary">{item.calories} Kcl </span>  - <span className="badge badge-warning">{item.weight} Mg</span></li>
			);
		  })}
			  
			</ul> 
			</div>
			)
	}
}


function mapStateToProps(state){
return{
	 Grocery: state.grocery
}

}

export default connect(mapStateToProps,{ addGroceryById })(Grocery);