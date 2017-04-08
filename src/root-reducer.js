import { combineReducers } from 'redux';

import beerListReducer from './BeerList/reducer';

const rootReducer = combineReducers({
  beerListReducer,
});

export default rootReducer;
