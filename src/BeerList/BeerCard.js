import React from 'react';
import classNames from 'classnames';

function BeerCard(props) {
  const formatDescription = string => {
    if (string < 100) return string;
    return `${string.slice(0, 100)}...`;
  };

  const handleFavourite = (id, added) => {
    if (added) {
      props.removeFavourite(id);
      return;
    }

    props.addFavourite(id);
  };
  
  return (
    <div className="beerCard box">
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
          <nav className="level is-mobile">
            <div className="level-left">
              <a
                onClick={() => { handleFavourite(props.beer.id, props.isFavourited); }}
                className="level-item"
              >
                <span className="icon is-small">
                  <i className={classNames('fa', {
                    'fa-star-o': !props.isFavourited,
                    'fa-star': props.isFavourited,
                  })} />
                </span>
                <span className="is-small is-success">Favourite</span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
}

export default BeerCard;
