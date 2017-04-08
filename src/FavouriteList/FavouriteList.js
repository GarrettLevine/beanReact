import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BeerCard from '../BeerList/BeerCard';
import * as beerActions from '../BeerList/actions';

class FavouriteList extends Component {
  constructor(props) {
    super(props);

    this.renderFavourites = this.renderFavourites.bind(this);
  }

  renderFavourites() {
    const isFavourited = beerId => {
      const favouriteIds = this.props.favouriteList.map(fav => fav.id);
      return favouriteIds.includes(beerId);
    };

    return this.props.favouriteList.map(beer => {
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
      <section className="section">
        <h1 className="title is-4">Favourite Beerz</h1>
        <div className="beerList container is-fluid">
          {this.renderFavourites()}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
 return {
   favouriteList: state.favourites.favouriteList,
 };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addFavourite: beerActions.addFavourite,
      removeFavourite: beerActions.removeFavourite,
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavouriteList);
