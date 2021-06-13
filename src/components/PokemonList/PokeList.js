import React, { useContext, useEffect } from "react";

import PokeContext from "../../context/poke/pokeContext";
import PokeItem from "./PokeItem";

const PokeList = () => {
  const pokeContext = useContext(PokeContext);
  const { pokemonList, getPokemonList, getPokemon, listNextUrl, pokemonCount } =
    pokeContext;

  useEffect(() => {
    getPokemonList(null, 0, 30);
  }, []);

  useEffect(() => {
    if (pokemonCount !== 0) {
      // Get initial Random Pokemon
      getPokemon(Math.floor(Math.random() * pokemonCount + 1));
    }
  }, [pokemonCount]);

  return (
    <ul>
      {pokemonList.map((p) => (
        <PokeItem pokeItem={p} key={p.name} />
      ))}
      {listNextUrl !== null ? (
        <li>
          <a
            href='#!'
            className='waves-effect waves-teal btn-flat btn-large'
            onClick={() => {
              getPokemonList(listNextUrl);
            }}
          >
            More Pokemon...
          </a>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

export default PokeList;
