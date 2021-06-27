import React from 'react';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';

const News = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>Cryptotracker | News</title>
        <meta name='cryptotracker' content='News' />
      </Helmet>
      <Navbar />
    </div>
  );
};

export default News;
