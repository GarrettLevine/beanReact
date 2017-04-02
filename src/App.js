import React, { Component } from 'react';

import BeerList from './BeerList/BeerList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="column">
        <h1 className="title is-1">Beans Love Beers</h1>
        <p className="subtitle is-4">A small app to keep track of your beany beers.</p>
        <BeerList />
      </div>
    );
  }
}

export default App;
