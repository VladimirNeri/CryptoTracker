import React, { useState, useEffect } from 'react';
import coingecko from '../apis/coingecko';
import './CoinSummary.css';

import Coin from '../components/Coin';
import Header from '../components/Header';

function CoinSummary() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      <Header />
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
