import React, { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://vitamin10-ol3a.onrender.com/api/quote');
      const data = await res.json();
      setQuote(data.quote);
    } catch (err) {
      console.error('Failed to fetch quote:', err);
      setQuote('Error fetching quote.');
    }
  };

  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <button onClick={fetchQuote}>Get Quote</button>
      <p>{quote}</p>
    </div>
  );
}

export default App;
