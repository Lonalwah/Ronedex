import { useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import "./App.css";

import PokeState from "./context/poke/pokeState";
import PokeList from "./components/PokemonList/PokeList";
import PokeModal from "./components/PokeModal";

const App = () => {
  useEffect(() => {
    // Initalize Materialize Javascript
    M.AutoInit();
  });

  return (
    <PokeState>
      <div className='ronedex App'>
        <header className="navbar-fixed">
          <nav>
            <div className='nav-wrapper'>
              <a
                href='#!'
                className='brand-logo center'
              >
                Ronedex
              </a>
            </div>
          </nav>
        </header>
        <section>
          <div className='container'>
            <div className="row">
              <PokeModal />
              <PokeList />
            </div>
          </div>
        </section>
        <footer></footer>
      </div>
    </PokeState>
  );
};

export default App;
