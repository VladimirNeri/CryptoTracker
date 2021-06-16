import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/coins/:id' component={Detail} />
      </Router>
    </div>
  );
};

export default App;
