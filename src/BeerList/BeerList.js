import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BeerCard from './BeerCard';
import SearchBar from './SearchBar';

import * as beerActions from './actions';

import './BeerList.css';

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.renderBeers = this.renderBeers.bind(this);
  }

  renderBeers() {
    const isFavourited = beerId => {
      const favouriteIds = this.props.favouriteList.map(fav => fav.id);
      return favouriteIds.includes(beerId);
    };

    return this.props.beerList.map(beer => {
      return (
        <BeerCard
          key={beer.id}
          addFavourite={this.props.actions.addFavourite}
          removeFavourite={this.props.actions.removeFavourite}
          beer={beer}
          isFavourited={isFavourited(beer.id)}
        />
      );
    });
  }

  render() {
    return (
      <div className="section">
        <SearchBar
          onSubmit={() => {
            this.props.actions.getBeers(this.props.searchValue);
          }}
          onChange={this.props.actions.updateSearch}
          value={this.props.searchValue}
          isFetching={this.props.isFetching}
        />
        <div className="beerList container is-fluid">
          { this.props.isFetching ?
              null
            :
              this.renderBeers()
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchValue: state.beer.searchValue,
    isFetching: state.beer.isFetching,
    beerList: state.beer.beerList,
    favouriteList: state.favourites.favouriteList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      updateSearch: beerActions.updateSearch,
      getBeers: beerActions.getBeers,
      addFavourite: beerActions.addFavourite,
      removeFavourite: beerActions.removeFavourite,
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BeerList);
