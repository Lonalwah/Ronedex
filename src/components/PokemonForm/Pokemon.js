import React, { Fragment, useContext, useEffect } from "react";
import PokeContext from "../../context/poke/pokeContext";
import PokeDetail from "./PokeDetail";
import PokeAbility from "./PokeAbility";
import M from "materialize-css";

const Pokemon = () => {
  const pokeContext = useContext(PokeContext);
  const { loading, pokemon } = pokeContext;

  useEffect(() => {
    let tabs = document.querySelectorAll(".tabs");
    M.Tabs.init(tabs);
  });

  if (loading || !pokemon)
    return (
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    );

  const { stats, abilities, moves } = pokemon;

  return (
    <Fragment>
      <PokeDetail pokemon={pokemon} />
      <div className="card">
        <div className='card-stacked'>
          <div className='card-tabs'>
            <ul className='tabs'>
              <li className='tab'>
                <a href='#stats'>Stats</a>
              </li>
              <li className='tab'>
                <a className='active' href='#abilities'>
                  Abilities
                </a>
              </li>
              <li className='tab'>
                <a href='#moves'>Moves</a>
              </li>
            </ul>
          </div>
          <div className='card-content'>
            <div id='stats'>
              <span className='card-title'>Stats</span>
              <div className='collection'>
                {stats.map((s) => (
                  <li key={s.stat.name} className='collection-item'>
                    <span className='title'>{s.stat.name.toUpperCase()}</span>
                    <span className='secondary-content'>{s.base_stat}</span>
                  </li>
                ))}
              </div>
            </div>
            <div id='abilities'>
              <span className='card-title'>Abilities</span>
              <div className='collection'>
                {abilities.map((a) => (
                  <PokeAbility pokeAbility={a} key={a.ability.name} />
                ))}
              </div>
            </div>
            <div id='moves'>
              <span className='card-title'>Moves</span>
              <div className='collection'>
                {moves.map((m) => (
                  <li key={m.move.name} className='collection-item'>
                    <span>{m.move.name.toUpperCase()}</span>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
    </Fragment>
  );
};

export default Pokemon;
