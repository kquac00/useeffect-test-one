import './App.css';
import AxiosPokemonApi from './components/AxiosPokemonApi';
import DisplayPokemon from './components/DisplayPokemon';

function App() {
  return (
    <div>
      <AxiosPokemonApi />
      {/* <DisplayPokemon /> */}
    </div>
  );
}

export default App;
