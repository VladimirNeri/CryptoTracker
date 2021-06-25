import React from 'react';
import './exchange.css'

const Coinexchange = ({
  id,
  rank,
  name,
  score,
  year,
  country,
  url,
  volume,
}) => {
  return (
    <div className='exchange-container'>
      <div className='exchange-row'>
        <div className='exchange-rank'>{rank}</div>
        <div className='exchange-name'><a href={url} target='_blank' rel='noreferrer'>{name}</a></div>
        <div className='exchange-score'>{score}</div>
        <div className='exchange-year'>{year}</div>
        <div className='exchange-country'>{country}</div>
        <div className='exchange-volume'>${volume.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default Coinexchange;
