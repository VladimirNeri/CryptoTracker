import React from 'react';
import Navbar from '../components/Navbar';
import CoinSummary from '../components/CoinSummary';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>CryptoTracker | Home</title>
        <meta name='cryptotracker' content='Home' />
      </Helmet>
      <Navbar />
      <CoinSummary />
    </div>
  );
};

export default Home;
