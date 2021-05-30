import React from 'react';

const CoinDesc = ({ data }) => {
  
  const renderData = () => {
    if (data) {
      return <div>{data.description.en}</div>;
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinDesc;
