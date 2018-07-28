import React, { Component } from 'react';
import Grocery from './components/Grocery';
import States from './components/States';
import ShoppingBag from './components/ShoppingBag';
import Wallet from './components/Wallet';



class App extends Component {
  render() {
    return (
      <div className='container'>
      <div className="row">
            <div className="jumbotron jumbotron-fluid" style={{width:'100%'}}>
            <div className="container">
             <h1 className="display-5">Shopper Stop</h1>
             <p className="lead">Here you can get your daily items </p>
            </div>
      </div>

      </div>
      <div className="row">
      <Wallet />
      </div>
          <div className="row" style={{marginBottom:'5%'}}>
              <Grocery /> 
              <ShoppingBag />
              <States />
          </div>
      </div>
    );
  }
}

export default App;
