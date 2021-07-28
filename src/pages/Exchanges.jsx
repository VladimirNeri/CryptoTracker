import React from 'react';
import Navbar from '../components/Navbar';
import Exchange from '../components/Exchanges';
import { Helmet } from 'react-helmet';


const Exchanges = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>CryptoTracker | Exchanges</title>
        <meta name='cryptotracker' content='Exchange' />
      </Helmet>
      <Navbar />
      <Exchange />
    </div>
  );
};

export default Exchanges;