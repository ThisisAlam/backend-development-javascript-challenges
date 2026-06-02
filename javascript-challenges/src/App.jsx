import React from 'react';

import StockTicker from './components/StockTicker.jsx';
import SearchContact from './components/SearchContact.jsx'; 

export default function App() {


  return (
    <div className="App">
      <h1>JavaScript Challenges</h1>
      <br /><hr /><br />

      <h2>Challenge no. 1: Stock Ticker</h2>
      <StockTicker />
      <br />

      <h2>Challenge no. 2: Search Contact</h2>
      <SearchContact />
      <br />
    </div>
  );
}