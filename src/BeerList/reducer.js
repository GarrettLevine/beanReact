import * as types from './types';

const initialState = {
  beerList: [],
  searchValue: '',
  isFetching: true,
};

export default function beerListReducer(state = initialState, action) {
  switch(action.type) {
    case types.UPDATE_SEARCH: {
      return Object.assign({}, state, {
        searchValue: action.payload.searchValue,
      });
    }

    case types.FETCHING_BEERS: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }

    case types.FETCHED_BEERS: {
      return Object.assign({}, state, {
        isFetching: false,
      });
    }

    case types.SET_BEERS: {
      return Object.assign({}, state, {
        beerList: action.payload.beers,
      });
    }
    
    default: {
      return state;
    }
  }
};
