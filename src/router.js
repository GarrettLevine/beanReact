import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './App';
import BeerList from './BeerList/BeerList';

const router = () => {
  return (
    <Router>
      <div>
        <App />

        <Route path="/" component={BeerList} />
      </div>
    </Router>
  );
};

export default router;
