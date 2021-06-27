import React from 'react';
import Navbar from '../components/Navbar'
import CoinDetail from '../components/CoinDetail';
import { Helmet } from 'react-helmet';


const Detail = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>Cryptotracker | Detail</title>
        <meta name='cryptotracker' content='detail' />
      </Helmet>
      <Navbar />
      <CoinDetail />
    </div>
  )
}

export default Detail
