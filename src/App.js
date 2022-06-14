import './App.css';
import Search from './cmp/Search/Search';
import Cosmetics from './cmp/Cosmetics/Cosmetics';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
      <div>
       <Cosmetics />
      </div>
    </div>

  );
}

export default App;
