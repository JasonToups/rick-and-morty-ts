import React from 'react';
import './Card.scss';

const Card = ({
  imgSrc,
  imgAlt,
  name,
  living,
  race,
  location,
  episodeFirst,
  episodes,
}: {
  [key: string]: any;
}) => {
  return (
    <div className='card'>
      <div className='card-image--wrapper'>
        <img className='card-image' src={imgSrc} alt={imgAlt} />
      </div>
      <div className='card-body'>
        <h1>{name}</h1>
        <h2>
          {living} - {race}
        </h2>
        <p>Last known location:</p>
        <p>{location}</p>
        <p>First seen in:</p>
        <p>{episodeFirst}</p>
      </div>
    </div>
  );
};

export default Card;
