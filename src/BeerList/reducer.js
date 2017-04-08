import * as types from './types';

const initialState = {
  beerList: [],
  searchValue: '',
};

export default function beerListReducer(state = initialState, action) {
  switch(action.type) {
    case types.UPDATE_SEARCH: {
      return Object.assign(initialState, {
        searchValue: action.payload.searchValue,
      });
    }
    
    default: {
      return initialState;
    }
  }
};
