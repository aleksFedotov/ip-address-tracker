import './App.css';
import SearchBar from './componets/search-bar/SearchBar';
import ResultDisplay from './componets/result-display/ResultDisplay';
import Map from './componets/map/Map';

function App() {
  return (
    <div className="App">
      <div className="hero"></div>
      <h1 className="main-header">IP Address Tracker</h1>
      <SearchBar />
      <ResultDisplay />
      <Map />
    </div>
  );
}

export default App;
