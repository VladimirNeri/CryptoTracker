import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Historychart from '../components/HistoryChart';
import CoinData from '../components/CoinData';
import CoinDesc from '../components/CoinDesc';
import coingecko from '../apis/coingecko';

const CoinDetail = () => {
  const { id } = useParams();

  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, desc, detail] = await Promise.all([
        coingecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '1',
          },
        }),
        coingecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '7',
          },
        }),
        coingecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '365',
          },
        }),
        coingecko.get(`/coins/${id}/`, {
          params: {
            localization: true,
            market_data: true,
          },
        }),
        coingecko.get('/coins/markets/', {
          params: {
            vs_currency: 'usd',
            ids: id,
            order: 'market_cap_desc',
            per_page: '9',
            page: 1,
          },
        }),
      ]);
      console.log(desc.data.description.en);
      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        desc: desc.data,
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const renderData = () => {
    

    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (
      <div className='coinlist'>
        <Historychart data={coinData} />
        <CoinData data={coinData.detail} />
        <CoinDesc data={coinData.desc} />
      </div>
    );
  };

  return renderData();
};

export default CoinDetail;
