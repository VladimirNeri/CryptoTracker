import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinSummary from './components/CoinSummary';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={CoinSummary} />
      </BrowserRouter>
    </div>
  );
};

export default App;
