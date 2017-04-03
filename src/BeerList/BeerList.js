import React, { Component } from 'react';

import './BeerList.css';

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.renderBeers = this.renderBeers.bind(this);

    this.state = {
      beerList: [],
    };
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers?per_page=24', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        beerList: data,
      });
    });
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
        <div className="field has-addons has-addons-centered">
          <p className="beerSearch control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Search for beer..."
            />
          </p>
          <p className="control">
            <a className="button is-info is-medium">Search</a>
          </p>
        </div>
        <div className="beerList">
          {this.renderBeers()}
        </div>
      </div>
    );
  }
}

export default BeerList;
