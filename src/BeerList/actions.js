import * as types from './types';

export function updateSearch(value) {
  return {
    type: types.UPDATE_SEARCH,
    payload: {
      searchValue: value,
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

export function fetchedBeers() {
  return {
    type: types.FETCHED_BEERS,
  }
}

export function getBeers(q = 'bean') {
  return dispatch => {
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
