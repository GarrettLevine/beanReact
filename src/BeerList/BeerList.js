import React, { Component } from 'react';

import BeerCard from './BeerCard';
import SearchBar from './SearchBar';

import './BeerList.css';

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.addFavourite = this.addFavourite.bind(this);
    this.removeFavourite = this.removeFavourite.bind(this);
    this.beerSearch = this.beerSearch.bind(this);
    this.renderBeers = this.renderBeers.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);

    this.state = {
      beerList: [],
      favourites: [],
      isFetching: false,
      searchValue: '',
    };
  }

  componentDidMount() {
    this.setState({
      isFetching: true,
    });

    fetch('https://api.punkapi.com/v2/beers?per_page=24', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        beerList: data,
      });
      this.setState({
        isFetching: false,
      });
    });
  }

  addFavourite(asset) {
    const favouriteIds = this.state.favourites.map(fav => fav.id);
    if (favouriteIds.includes(asset.id)) return;

    const newArray = this.state.favourites.concat(asset);

    this.setState({
      favourites: newArray,
    });
  }

  removeFavourite(id) {
    const favouriteIds = this.state.favourites.map(fav => fav.id);
    if (!favouriteIds.includes(id)) return;

    const newArray = this.state.favourites.filter(fav => fav.id !== id);
    this.setState({
      favourites: newArray,
    });
  }

  updateSearchValue(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  beerSearch(e) {
    e.preventDefault();

    this.setState({
      isFetching: true,
    });
    fetch(`https://api.punkapi.com/v2/beers?per_page=24&beer_name=${this.state.searchValue}`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        beerList: data,
      });
      setTimeout(() => {
        this.setState({
          isFetching: false,
        });
      }, 350);
    });

  }

  renderBeers() {
    const isFavourited = beerId => {
      const favouriteIds = this.state.favourites.map(fav => fav.id);
      return favouriteIds.includes(beerId);
    };

    return this.state.beerList.map(beer => {
      return (
        <BeerCard
          key={beer.id}
          addFavourite={this.addFavourite}
          removeFavourite={this.removeFavourite}
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
          onSubmit={this.beerSearch}
          onChange={this.updateSearchValue}
          value={this.state.searchValue}
          isFetching={this.state.isFetching}
        />
        <div className="beerList container is-fluid">
          { this.state.isFetching ?
              null
            :
              this.renderBeers()
          }
        </div>
      </div>
    );
  }
}

export default BeerList;
