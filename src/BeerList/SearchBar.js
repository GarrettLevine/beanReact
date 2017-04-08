import React from 'react';
import classNames from 'classnames';

function SearchBar(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="field has-addons has-addons-centered"
    >
      <p className="beerSearch control">
        <input
          className="input is-medium"
          type="text"
          placeholder="Search for beer..."
          value={props.value}
          onChange={e => { props.onChange(e.target.value); }}
        />
      </p>
      <p className="control">
        <a
          type="submit"
          className={classNames('button is-info is-medium is-primary', {
            'is-loading': props.isFetching,
          })}
          onClick={props.onSubmit}
        >
          Search
        </a>
      </p>
    </form>
  );
}

export default SearchBar;
