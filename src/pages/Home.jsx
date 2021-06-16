import React from 'react';
import Navbar from '../components/Navbar';
import CoinSummary from '../components/CoinSummary';

const Home = () => {
  return (
    <div className='container'>
      <Navbar />
      <CoinSummary />
    </div>
  );
};

export default Home;
