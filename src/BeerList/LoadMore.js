import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import * as beerActions from './actions';

import './LoadMore.css';

function LoadMore(props) {
  const {
    actions,
    beerCount,
    isFetching,
    searchTerm,
  } = props;

  return (
    <div className="block loadMore__container">
      <a
        className={classNames('loadMore__button button is-info is-large', {
          'is-loading': isFetching,
        })}
        onClick={() => { actions.getMoreBeers(searchTerm, beerCount); }}
      >
        Load More
      </a>
    </div>
  );
}

function mapStateToProps({ beer }) {
  return {
    isFetching: beer.isFetching,
    searchTerm: beer.searchTerm,
    beerCount: beer.beerList.length,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getMoreBeers: beerActions.getMoreBeers,
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadMore);
