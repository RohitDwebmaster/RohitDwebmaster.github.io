import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';


import Homepage from './Homepage';
import Insurance from './Insurance';
import Package from './Package';


class App extends Component{

    render(){
    	return(
    		<BrowserRouter>
    		<div>
             <Route path="/" exact component={ Homepage } />
             <Route path="/insurance" exact component={ Insurance } />
             <Route path="/package" exact component={ Package } />
             </div>
             </BrowserRouter>
    		);
    }


}


render(<App />, document.getElementById('root'));