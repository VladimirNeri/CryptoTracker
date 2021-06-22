import React from 'react';

const CoinDesc = ({ data }) => {
  // add line breaks to rendered string
  const tagHtml = (data) => {
    let string = data.replace(/(?:\r\n|\r|\n)/g, '<br>');
    return string;
  };
  const renderData = () => {
    if (data) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: tagHtml(data.description.en) }}
        />
      );
    }
  };

  return <div className='coin-description'>{renderData()}</div>;
};

export default CoinDesc;
