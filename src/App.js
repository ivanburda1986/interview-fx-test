import { Header } from "./components/Header";
import { FXPairsList } from "./components/FXPairsList";
import { Searchbar } from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <FXPairsList />
    </div>
  );
}

export default App;
