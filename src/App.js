import './App.css';
import HomePage from './pages/homepage/homepage.component';

import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

const HatsPage = ()=>{
  return(
    <div>
      <h1>hats page</h1>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage}/>
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
