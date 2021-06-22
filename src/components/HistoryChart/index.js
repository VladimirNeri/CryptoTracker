import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import { historyOptions } from '../../chartConfigs/chartConfigs';

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState('24h');

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case '24h':
        return day;
      case '7d':
        return week;
      case '1y':
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      // console.log('yeah');
      const chartInstance = new Chart(chartRef.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: 'rgb(255, 184, 108)',
              borderColor: 'rgb(255, 184, 108)',
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  });

  // const renderPrice = () => {
  //   if (detail) {
  //     return (
  //       <>
  //         <p className='my-0'>${detail.current_price.toFixed(2)}</p>
  //         <p
  //           className={
  //             detail.price_change_24h < 0
  //               ? 'negative'
  //               : 'positive'
  //           }
  //         >
  //           {detail.price_change_percentage_24h.toFixed(2)}%
  //         </p>
  //       </>
  //     );
  //   }
  // };
  return (
    <div className='coin-history'>
      {/* <div>{renderPrice()}</div> */}
      <div>
        <canvas ref={chartRef} id='myChart' width={250} height={250}></canvas>
      </div>

      <div className='chart-button mt-1'>
        <button
          onClick={() => setTimeFormat('24h')}
          className='btn 24h'
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat('7d')}
          className='btn 7d'
        >
          7d
        </button>
        <button
          onClick={() => setTimeFormat('1y')}
          className='btn 1y'
        >
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
