import React from 'react';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';
import DefiSummary from '../components/Defi';

const Defi = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>Cryptotracker | Defi</title>
        <meta name='cryptotracker' content='defi' />
      </Helmet>
      <Navbar />
      <DefiSummary />
    </div>
  );
};

export default Defi;
