import React from 'react';
import './tableheadersummary.css'; 

const Tableheader = () => {
  return (
    <div className='table'>
      <div className='header'>
        <div className='table-currency'>Coin</div>
        <div className='table-price'>Price</div>
        <div className='table-marketcap'>MarketCap</div>
        <div className='table-change'>24H∆</div>
        <div className='table-volume'>Volume</div>
      </div>
    </div>
  )
}

export default Tableheader
