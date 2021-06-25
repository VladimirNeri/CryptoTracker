import React from 'react';
import './tableheader.css';

const Tableheader = () => {
  return (
    <div className='table-header-exchange'>
      <div className='header-exchange'>
        <div className='table-exchange'>Exchange</div>
        <div className='table-score'>Score</div>
        <div className='table-year'>Year</div>
        <div className='table-country'>Country</div>
        <div className='table-volume'>Volume</div>
      </div>
    </div>
  );
};

export default Tableheader;
