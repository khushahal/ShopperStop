import React from 'react';

import {connect} from 'react-redux';

class States extends React.Component{

	render(){
		var cost = 0,calories = 0,weight = 0;
	
		this.props.state.forEach(function(item){
				cost = cost + item.cost;
				calories += item.calories;
				weight += item.weight;
		})

		return(
			<div className='col-md-3 stats-bg'>
			<h2 className="text-center">States Items </h2>
			<ul className="list-group">
				<div>
	  			  <li className="list-group-item">Cost : ${cost}</li>
	  			  <li className="list-group-item">Calories : {calories} KCL</li>
				  <li className="list-group-item">Weight : {weight} MG</li>
				  </div>
			</ul>
			</div>
			)
	}
}

function mapStateToProps(state){
return{
	 state: state.shoppingBag
	}
}

export default connect(mapStateToProps)(States);