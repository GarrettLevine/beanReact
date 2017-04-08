import * as types from './types';

export function updateSearch(value) {
  return {
    type: types.UPDATE_SEARCH,
    payload: {
      searchValue: value,
    },
  };
}

