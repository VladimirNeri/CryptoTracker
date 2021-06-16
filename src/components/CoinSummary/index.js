import React, { useState, useEffect } from 'react';
import coingecko from '../../apis/coingecko';
import Coin from '../Coin';
import Tableheader from '../Tableheader';

function CoinSummary() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await coingecko.get(`/coins/markets/`, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: '100',
          page: 1,
        },
      });
      console.log(result.data);
      setCoins(result.data);
    };
    fetchData();
  }, []);

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase());

  return (
    <div className='coin-app'>
      <Tableheader />
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            id={coin.id}
            rank={coin.market_cap_rank}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default CoinSummary;
