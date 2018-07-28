import React from 'react';

import {connect} from 'react-redux';


class Wallet extends React.Component{


	getWalletAmount(shoppingBag){
		let walletAmount = 2000;

		shoppingBag.forEach(function(item){
			walletAmount -= item.cost;
		});

		return (<span className="badge badge-primary badge-pill"> $ {walletAmount}</span> );
	}

	render(){
		return(<div style={{width:'100%'}}>
			  <h2 className="text-center">  your wallet has amount {this.getWalletAmount(this.props.shoppingBag)}</h2>
			  <br/>
			 </div>
			  )
	}
}


function mapStateToProps(state){
return{
	 shoppingBag: state.shoppingBag
}

}

export default connect(mapStateToProps)(Wallet);