import React, { Component } from 'react';

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beerList: [],
    };
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        beerList: data,
      });
    });
  }

  render() {
    return (
      <div className="columns">

      </div>
    );
  }
}

export default BeerList;
