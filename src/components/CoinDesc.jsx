import React from 'react';

const CoinDesc = ({ data }) => {
  const stripHtml = (data) => {
    let string = data.replace(/(<([^>]+)>)/gi, '');
    return string;
  };
  const renderData = () => {
    if (data) {
      return <div>{stripHtml(data.description.en)}</div>;
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinDesc;
