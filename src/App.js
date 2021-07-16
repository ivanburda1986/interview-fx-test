
import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import FXPairsList from './contexts/FXPairsList/FXPairsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Searchbar/>
      <FXPairsList/>
    </div>
  );
}

export default App;
