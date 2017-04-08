import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavouriteList extends Component {
  render() {
    return (
      <section className="section">
        <h1 className="title is-4">Favourite Beerz</h1>
        <p>{this.props.searchValue}</p>
      </section>
    );
  }
}

function mapStateToProps(state) {
 return {
   searchValue: state.beer.searchValue,
 }
};

export default connect(
  mapStateToProps,
)(FavouriteList);
