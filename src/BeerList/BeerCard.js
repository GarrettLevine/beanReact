import React from 'react';

function BeerCard(props) {
  const { beer } = props;

  const formatDescription = string => {
    if (string < 100) return string;
    return `${string.slice(0, 100)}...`;
  };
  
  return (
    <div className="beerCard box">
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
}

export default BeerCard;
