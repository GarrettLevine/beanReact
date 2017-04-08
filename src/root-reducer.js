import { combineReducers } from 'redux';

import beerListReducer from './BeerList/reducer';

const rootReducer = combineReducers({
  beer: beerListReducer,
});

export default rootReducer;
