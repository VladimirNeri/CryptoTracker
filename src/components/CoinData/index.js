import React from 'react';

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className='coin-info'>
          <div className='coin-info-title'>
            <h1 className='coin-info-name'>{data.name}</h1>

            <div className='coin-image'>
              <img src={data.image} alt='crypto' />
            </div>
          </div>
          <br />
          <br />

          <h2 className='coin-info-price'>${data.current_price.toFixed(2)}</h2>
          <br />

          <h2 className={data.price_change_24h < 0 ? 'negative' : 'positive'}>
            ∆{data.price_change_percentage_24h.toFixed(2)}%
          </h2>
          <br />
          <h2 className='coin-info-marketcap'>
            <span className=''>Market Cap: </span>
            <span>${data.market_cap.toLocaleString()}</span>
          </h2>

          <div className=''>
            <h2 className=''>
              <span className=''>Volume(24H): </span>
              <span>{data.total_volume.toLocaleString()}</span>
            </h2>

            <h2 className=''>
              <span className=''>High 24h: </span>
              <span>${data.high_24h.toLocaleString()}</span>
            </h2>
          </div>

          <div className=''>
            <h2 className=''>
              <span className=''>Low 24h: </span>
              <span>${data.low_24h.toLocaleString()}</span>
            </h2>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
