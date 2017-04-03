import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column">
        <h1 className="title is-1">Beans Love Beers</h1>
        <p className="subtitle is-4">A small app to keep track of your beany beers.</p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
