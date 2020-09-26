import React from 'react';
import About from './Pages/About'
import Nav from './Pages/Nav'
import Shop from './Pages/Shop'
import Home from './Pages/Home'
import ItemDetail from './Pages/ItemDetail'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
      <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/Shop' exact component={Shop} />
          <Route path='/shop/:id' component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
