import React from 'react';
import classNames from 'classnames';

function BeerCard(props) {
  const formatDescription = string => {
    if (string < 100) return string;
    return `${string.slice(0, 100)}...`;
  };

  const handleFavourite = (beer, added) => {
    if (added) {
      props.removeFavourite(beer.id);
      return;
    }

    props.addFavourite(beer);
  };
  
  return (
    <div className="beerCard box">
      <nav className="level is-mobile">
        <div className="level-right beerCard__favourite">
          <a
            className="level-item"
            onClick={() => { handleFavourite(props.beer, props.isFavourited); }}
          >
            <span className="icon is-small">
              <i className={classNames('fa', {
                'fa-star-o': !props.isFavourited,
                'fa-star': props.isFavourited,
              })} />
            </span>
          </a>
        </div>
      </nav>
      <article className="media">
        <div className="media-left">
          <figure className="image is-96x96">
            <img src={props.beer.image_url} alt={props.beer.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.beer.name}</strong>
              <br />
              {formatDescription(props.beer.description)}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BeerCard;
