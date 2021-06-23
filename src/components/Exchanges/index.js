import React, { useState, useEffect } from 'react';
import coingecko from '../../apis/coingecko';


const Exchanges = () => {
    const[exchanges, setExchanges] = useState([]);

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
        const filteredExchanges = exchanges.filter((exchange) => exchange.name.toLowerCase());

    return (
        <div>
            Exchanges
        </div>
    )
}

export default Exchanges
