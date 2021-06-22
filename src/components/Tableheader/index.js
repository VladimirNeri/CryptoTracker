import React from 'react';
import './table.css'; 

const Tableheader = () => {
  return (
    <table>
      <tr className='header'>
        <th className='table-currency'>Coin</th>
        <th className='table-price'>Price</th>
        <th className='table-marketcap'>MarketCap</th>
        <th className='table-change'>24H∆</th>
        <th className='table-volume'>Volume</th>
      </tr>
    </table>
  )
}

export default Tableheader
