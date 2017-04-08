import * as types from './types';

export function updateSearch(value) {
  return {
    type: types.UPDATE_SEARCH,
    payload: {
      searchValue: value,
    },
  };
}

export function addFavourite(beer) {
  return {
    type: types.ADD_FAVOURITE,
    payload: {
      beer,
    },
  };
}

export function removeFavourite(id) {
  return {
    type: types.REMOVE_FAVOURITE,
    payload: {
      id,
    },
  };
}

export function setBeers(beers) {
  return {
    type: types.SET_BEERS,
    payload: {
      beers,
    },
  };
}

export function fetchingBeers() {
  return {
    type: types.FETCHING_BEERS,
  };
}

export function fetchedBeers() {
  return {
    type: types.FETCHED_BEERS,
  }
}

export function getBeers(q = 'bean') {
  return dispatch => {
    dispatch(fetchingBeers());
    return fetch(
      `https://api.punkapi.com/v2/beers?per_page=24&beer_name=${q}`,
      {
        method: 'GET',
      }
    )
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedBeers())
      dispatch(setBeers(data));
    });
  };
}
