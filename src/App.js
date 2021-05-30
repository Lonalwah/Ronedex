import { useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";

import PokeState from "./context/poke/pokeState";
import PokeList from "./components/PokeList";
import Pokemon from "./components/Pokemon";

const App = () => {
  useEffect(() => {
    // Initalize Materialize Javascript
    M.AutoInit();
  });

  return (
    <PokeState>
      <div className='App'>
        <header>
          <nav>
            <div className='nav-wrapper'>
              <a
                href='#!'
                data-target='slide-out'
                className='brand-logo left sidenav-trigger show-on-large'
              >
                <i className='material-icons'>menu</i>Ronedex
              </a>
            </div>
          </nav>
          <ul id='slide-out' className='sidenav' style={{ height: "100%" }}>
            <li>
              <div className='user-view'>
                <span className='header'>Ronedex</span>
              </div>
            </li>
            <li>
              <a href='#!'>About</a>
            </li>
            <li>
              <div className='divider'></div>
            </li>
            <li className='no-padding'>
              <ul className='collapsible collapsible-accordion'>
                <li>
                  <a href='#!' className='collapsible-header'>
                    Pokemon<i className='material-icons'>arrow_drop_down</i>
                  </a>
                  <div className='collapsible-body'>
                    <PokeList />
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </header>
        <section>
          <div className='container'>
            <Pokemon />
          </div>
        </section>
        <footer></footer>
      </div>
    </PokeState>
  );
};

export default App;
