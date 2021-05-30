import React, { Fragment, useContext, useEffect } from "react";
import PokeContext from "../context/poke/pokeContext";

const PokeList = () => {
  const pokeContext = useContext(PokeContext);

  const { pokemonList, loading, getPokemonList, getPokemon } = pokeContext;

  useEffect(() => {
    getPokemonList();

    // Get initial Random Pokemon
    getPokemon(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(
        Math.random() * 200 + 1
      )}/`
    );
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    getPokemon(e.target.dataset.url);
  };

  if (loading && !pokemonList.length > 0)
    return (
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    );

  return (
    <Fragment>
      {pokemonList.map((p) => (
        <li>
          <a href='#!' onClick={onClick} data-url={p.url}>
            {p.name.toUpperCase()}
          </a>
        </li>
      ))}
    </Fragment>
  );
};

export default PokeList;
