import * as beerTypes from '../BeerList/types';

const initialState = {
  favouriteList: [],
};

export default function favouritesRecuder(state = initialState, action) {
  switch(action.type) {
    case beerTypes.ADD_FAVOURITE: {
      const favouriteIds = state.favouriteList.map(fav => fav.id);
      if (favouriteIds.includes(action.payload.beer.id)) return state;

      return Object.assign({}, state, {
        favouriteList: [ ...state.favouriteList, action.payload.beer ],
      });
    }

    case beerTypes.REMOVE_FAVOURITE: {
      return Object.assign({}, state, {
        favouriteList: state.favouriteList.filter(fav => fav.id !== action.payload.id),
      });
    }

    default: {
      return state;
    }
  };
};
