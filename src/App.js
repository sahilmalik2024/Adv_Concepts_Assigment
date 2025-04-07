import logo from './public/Vanamo_Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CDN Caching Demo</h1>
      <img src={logo} alt="Logo" width="200" />
      <p>This content should be cached by a CDN.</p>
    </div>
  );
}

export default App;
