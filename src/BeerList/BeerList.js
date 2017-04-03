import React, { Component } from 'react';

import BeerCard from './BeerCard';
import SearchBar from './SearchBar';

import './BeerList.css';

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.renderBeers = this.renderBeers.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.beerSearch = this.beerSearch.bind(this);

    this.state = {
      beerList: [],
      searchValue: '',
      isFetching: false,
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
    });

    setTimeout(() => {
      this.setState({
        isFetching: false,
      });
    }, 350);
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
    });

    setTimeout(() => {
      this.setState({
        isFetching: false,
      });
    }, 350);
  }

  renderBeers() {
    return this.state.beerList.map(beer => {
      return (
        <BeerCard
          key={beer.id}
          beer={beer}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          onSubmit={this.beerSearch}
          onChange={this.updateSearchValue}
          value={this.state.searchValue}
          isFetching={this.state.isFetching}
        />
        <div className="beerList">
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
