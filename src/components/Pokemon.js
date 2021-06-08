import React, { useContext, useEffect, useState } from "react";
import PokeContext from "../context/poke/pokeContext";
import PokeSpecies from "./PokeSpecies";

const Pokemon = () => {
  const pokeContext = useContext(PokeContext);
  const { loading, pokemon, species, getSpecies } = pokeContext;

  useEffect(() => {
    if (pokemon !== null) getSpecies(pokemon.species);
  }, [pokemon]);

  if (loading || !pokemon || !species)
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
        <p className='center-align'>
          No.{" "}
          {String(
            species.pokedex_numbers.find((e) => e.pokedex.name === "national")
              .entry_number
          ).padStart(3, "0")}
        </p>
      </div>
      <div className='card-stacked'>
        <div className='card-content'>
          <span className='card-title'>
            {species.names.find((e) => e.language.name === "en").name}
          </span>
          <PokeSpecies species={species} />
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
