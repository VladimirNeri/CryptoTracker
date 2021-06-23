import React from 'react';
import './table.css'; 

const Tableheader = () => {
  return (
    <tbody>
      <tr className='header'>
        <th className='table-currency'>Coin</th>
        <th className='table-price'>Price</th>
        <th className='table-marketcap'>MarketCap</th>
        <th className='table-change'>24H∆</th>
        <th className='table-volume'>Volume</th>
      </tr>
    </tbody>
  )
}

export default Tableheader
