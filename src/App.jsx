import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CoinSummary from './pages/CoinSummary';
import CoinDetail from './pages/CoinDetail';

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path='/' component={CoinSummary} />
        <Route path='/coins/:id' component={CoinDetail} />
      </Router>
    </div>
  );
};

export default App;
