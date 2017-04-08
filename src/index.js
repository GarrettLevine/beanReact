import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  // applyMiddleWare,
  createStore,
  // compose,
} from 'redux';

import Router from './router';
import './index.css';

import rootReducer from './root-reducer';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
