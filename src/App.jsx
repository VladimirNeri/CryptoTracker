import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Exchanges from './pages/Exchanges';
import NFT from './pages/NFT';
import Defi from './pages/Defi';
import News from './pages/News';
import './App.css'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/exchanges' component={Exchanges} />
        <Route path='/nft' component={NFT} />
        <Route path='/defi' component={Defi} />
        <Route path='/news' component={News} />
        <Route path='/coins/:id' component={Detail} />
      </Switch>
    </div>
  );
};

export default App;
