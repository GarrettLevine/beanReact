import * as types from './types';

const initialState = {
  beerList: [],
  searchValue: '',
  searchTerm: '',
  isFetching: true,
};

export default function beerListReducer(state = initialState, action) {
  switch(action.type) {
    case types.UPDATE_SEARCH: {
      return Object.assign({}, state, {
        searchValue: action.payload.searchValue,
      });
    }

    case types.SET_SEARCH_TERM: {
      return Object.assign({}, state, {
        searchTerm: action.payload.searchTerm,
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

    case types.ADD_BEERS: {
      return Object.assign({}, state, {
        beerList: state.beerList.concat(action.payload.beers),
      });
    }
    
    default: {
      return state;
    }
  }
};
