import { combineReducers } from 'redux';

import beerListReducer from './BeerList/reducer';
import favouritesListReducer from './FavouriteList/reducer';

const rootReducer = combineReducers({
  beer: beerListReducer,
  favourites: favouritesListReducer,
});

export default rootReducer;
