import React, { useState, useEffect } from 'react';
import coingecko from '../../apis/coingecko';
import Coinexchange from '../CoinExchange';
import Tableheader from './Tableheader';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await coingecko.get(`/exchanges`, {
        params: {
          per_page: '100',
          page: 1,
        },
      });
      console.log(result.data);
      setExchanges(result.data);
    };
    fetchData();
  }, []);
  const filteredExchanges = exchanges.filter((exchange) =>
    exchange.name.toLowerCase()
  );

  return (
    <div className='coin-app'>
      <Tableheader />
      {filteredExchanges.map((exchange) => {
        return (
          <Coinexchange
            key={exchange.id}
            id={exchange.id}
            rank={exchange.trust_score_rank}
            score={exchange.trust_score_rank}
            name={exchange.name}
            year={exchange.year_established}
            country={exchange.country}
            url={exchange.url}
            volume={exchange.trade_volume_24h_btc}
          />
        );
      })}
    </div>
  );
};

export default Exchanges;
