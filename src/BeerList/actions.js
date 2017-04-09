import * as types from './types';

export function updateSearch(value) {
  return {
    type: types.UPDATE_SEARCH,
    payload: {
      searchValue: value,
    },
  };
}

export function setSearchTerm(searchTerm) {
  return {
    type: types.SET_SEARCH_TERM,
    payload: {
      searchTerm,
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

export function addBeers(beers) {
  return {
    type: types.ADD_BEERS,
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

export function getBeers(query = '') {
  const url = query.length ?
      `https://api.punkapi.com/v2/beers?per_page=24&beer_name=${query}`
    :
      `https://api.punkapi.com/v2/beers?per_page=25`;
  return dispatch => {
    dispatch(fetchingBeers());
    dispatch(setSearchTerm(query));
    return fetch(url, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedBeers())
      dispatch(setBeers(data));
    });
  };
}

export function getMoreBeers(query = '', offset) {
  const pageNumber = Math.ceil(offset / 25 + 1);
  const url = query.length ?
    `https://api.punkapi.com/v2/beers?per_page=24&beer_name=${query}page=${pageNumber}`
  :
    `https://api.punkapi.com/v2/beers?per_page=25&page=${pageNumber}`;

  return dispatch => {
    dispatch(fetchingBeers());
    return fetch(url, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(fetchedBeers());
      dispatch(addBeers(data));
    });
  };
}