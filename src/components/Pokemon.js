import React, { useContext } from "react";
import PokeContext from "../context/poke/pokeContext";

const Pokemon = () => {
  const pokeContext = useContext(PokeContext);
  const { loading, pokemon } = pokeContext;

  if (loading || !pokemon)
    return (
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    );

  const { id, name, sprites, types, stats, abilities, moves, height, weight } =
    pokemon;

  return (
    <div className='card horizontal'>
      <div className='card-image'>
        <img
          alt={`official artwork ${name}`}
          src={sprites.other["official-artwork"].front_default}
          style={{ height: "200px" }}
        />
        <p className='center-align'>No. {String(id).padStart(3, "0")}</p>
      </div>
      <div className='card-stacked'>
        <div className='card-content'>
          <span className='card-title'>
            {name.slice(0, 1).toUpperCase() + name.slice(1)}
          </span>
          <div className='collection'>
            <li className='collection-item'>
              <span className='title'>Type</span>
              <span className='secondary-content'>
                {types.map((t) => (
                  <span key={t.type.name} className='badge blue white-text'>
                    {t.type.name}
                  </span>
                ))}
              </span>
            </li>
            <li className='collection-item'>
              <span className='title'>Height</span>
              <span className='secondary-content'>{height}</span>
            </li>
            <li className='collection-item'>
              <span className='title'>Weight</span>
              <span className='secondary-content'>{weight}</span>
            </li>
          </div>
        </div>
        <div className='card-content'>
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
        <div className='card-content'>
          <span className='card-title'>Abilities</span>
          <div className='collection'>
            {abilities.map((a) => (
              <li key={a.ability.name} className='collection-item'>
                <span>{a.ability.name.toUpperCase()}</span>
              </li>
            ))}
          </div>
        </div>
        <div className='card-content'>
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
  );
};

export default Pokemon;
