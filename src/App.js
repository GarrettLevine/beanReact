import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './App.css';

function App(props) {
  return (
    <div className="column">
      <nav className="nav">
        <div className="nav-left nav-item">
          <h1 className="title is-2">Beans Love Beers</h1>
        </div>
        <div className="nav-right nav-menu">
          <Link
            to="/"
            className={classNames('nav-item', {
              'is-active': props.history.location.pathname === '/',
            })}
          >
            Home
          </Link>
          <Link
            to="/favourites"
            className={classNames('nav-item', {
              'is-active': props.history.location.pathname === '/favourites',
            })}
          >
            Favourites
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default App;
