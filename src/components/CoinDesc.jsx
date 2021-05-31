import React from 'react';

const CoinDesc = ({ data }) => {
  
  // add line breaks to rendered string 
  const stripHtml = (data) => {
    let string = data
      .replace(/(?:\r\n|\r|\n)/g, '<br>');
    return string;
  };
  const renderData = () => {
    if (data) {
      return <div dangerouslySetInnerHTML={{ __html: stripHtml(data.description.en) }} />;
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinDesc;
