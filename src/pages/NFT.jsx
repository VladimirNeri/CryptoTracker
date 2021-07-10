import React from 'react';
import Navbar from '../components/Navbar';
import NFTSummary from '../components/NFT';
import { Helmet } from 'react-helmet';

const NFT = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>Cryptotracker | NFT</title>
        <meta name='cyrptotracker' content='nft' />
      </Helmet>
      <Navbar />
      <NFTSummary />
    </div>
  );
};

export default NFT;
