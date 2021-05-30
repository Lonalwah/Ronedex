import React, { useContext, useEffect } from "react";

import PokeContext from "../context/poke/pokeContext";
import PokeItem from "./PokeItem";

const PokeList = () => {
  const pokeContext = useContext(PokeContext);
  const {
    pokemonList,
    loading,
    getPokemonList,
    fetchFormList,
    getPokemon,
    formList,
    formNextUrl,
  } = pokeContext;

  useEffect(() => {
    fetchFormList(null, 0, 30);

    // Get initial Random Pokemon
    getPokemon(Math.floor(Math.random() * 200 + 1));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getPokemonList(formList);
  }, [formList]);

  return (
    <ul>
      {pokemonList.map((p) => (
        <PokeItem pokemon={p} key={p.id} />
      ))}
      {formNextUrl !== null ? (
        <li>
          <a
            href='#!'
            className='waves-effect waves-teal btn-flat btn-large'
            onClick={() => {
              fetchFormList(formNextUrl);
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
