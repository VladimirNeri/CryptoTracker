import React from 'react';
import { Link } from 'react-router-dom';
import './Coin.css';

const Coin = ({
  id,
  rank, 
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className='coin-container'>
      <Link to={`/coins/${id}`} className='coin-link'>
        <div className='coin-row'>
          <div className='coin-rank'>{rank}</div>
          <div className='coin'>
            <img src={image} alt='crypto' />
            <h1>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
          </div>

          <div className='coin-data'>
            <p className='coin-price'>${price}</p>
            <p className='coin-volume'>${volume.toLocaleString()}</p>

            {priceChange < 0 ? (
              <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
            ) : (
              <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
            )}

            <p className='coin-marketcap'>${marketcap.toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Coin;
