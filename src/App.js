import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import * as beerActions from './BeerList/actions';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.actions.getBeers();
  }

  render(props) {
    return (
      <div className="hero is-primary topNav">
        <nav className="nav">
          <div className="nav-left nav-item">
            <h1 className="title is-3">Beans Love Beers</h1>
          </div>
          <div className="nav-right nav-menu">
            <Link
              to="/"
              className={classNames('nav-item', {
                'is-active': this.props.history.location.pathname === '/',
              })}
            >
              Home
            </Link>
            <Link
              to="/favourites"
              className={classNames('nav-item', {
                'is-active': this.props.history.location.pathname === '/favourites',
              })}
            >
              Favourites
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getBeers: beerActions.getBeers,
    }, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(App);
