import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import BeerList from './BeerList/BeerList';
import FavouriteList from './FavouriteList/FavouriteList';

const history = createBrowserHistory();
const router = props => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={BeerList} />
        <Route exact path="/favourites" component={FavouriteList} />
      </div>
    </Router>
  );
};

export default router;
