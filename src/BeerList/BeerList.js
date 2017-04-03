import React, { Component } from 'react';
import classNames from 'classnames';

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
      const formatDescription = string => {
        if (string < 100) return string;
        return `${string.slice(0, 100)}...`;
      };

      return (
        <div key={beer.id} className="beerCard box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src={beer.image_url} alt={beer.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{beer.name}</strong>
                  <br />
                  {formatDescription(beer.description)}
                </p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item button is-primary">
                    <span className="icon is-small">
                      <i className="fa fa-star-o" />
                    </span>
                    <span className="is-small">Favourite</span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.beerSearch}
          className="field has-addons has-addons-centered"
        >
          <p className="beerSearch control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Search for beer..."
              value={this.state.searchValue}
              onChange={this.updateSearchValue}
            />
          </p>
          <p className="control">
            <a
              type="submit"
              className={classNames('button is-info is-medium is-primary', {
                'is-loading': this.state.isFetching,
              })}
              onClick={this.beerSearch}
            >
              Search
            </a>
          </p>
        </form>
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
