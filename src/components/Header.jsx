import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-row'>
        <div className='header-data'>Coin</div>
        <div className='header-data'>Symbol</div>
        <div className='header-data'>Price</div>
        <div className='header-data'>Volume</div>
        <div className='header-data'>Change</div>
        <div className='header-data'>MarketCap</div>
      </div>
    </div>
  );
};

export default Header;
