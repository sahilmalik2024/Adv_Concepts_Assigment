import logo from './public/Vanamo_Logo.png';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setData(data);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  
  return (
    <div className="App">
      <h1>CDN Caching Demo</h1>
      <img src={logo} alt="Logo" width="200" />
      <p>This content should be cached by a CDN.</p>
    </div>
  );
}

export default App;
