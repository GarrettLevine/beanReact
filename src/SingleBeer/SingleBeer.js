import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SingleBeer.css';

class SingleBeer extends Component {
  constructor(props) {
    super(props);

    this.renderBeer = this.renderBeer.bind(this);
  }

  renderBeer() {
    const { beer } = this.props;

    return (
      <div className="columns">
        <div className="column">
          <figure className="image is-4by3">
            <img src={beer.image_url} alt={beer.name} />
          </figure>
        </div>
        <div className="column is-three-quarters">
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Alcohal</p>
                <p className="title">{`${beer.abv}%`}</p>
              </div>
            </div>
             <div className="level-item has-text-centered">
              <div>
                <p className="heading">Bottle Size</p>
                <p className="title">{`${beer.volume.value} ${beer.volume.unit}`}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Pairs With</p>
                <p className="title">{beer.food_pairing[0]}</p>
              </div>
            </div>
          </nav>
          <h2 className="title is-2">{beer.name}</h2>
          <h4 className="subtitle is-5">{beer.tagline}</h4>
          <p className="is-medium">{beer.description}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section className="section">
        {this.props.beer ?
            this.renderBeer()
          :
            null
        }
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    beer: state.beer.beerList.find(beer => beer.id === Number(ownProps.match.params.beerId)),
  };
}

export default connect(
  mapStateToProps,
)(SingleBeer);
