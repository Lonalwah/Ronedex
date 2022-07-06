import React, { useContext, useEffect } from "react";

import PokeContext from "../../context/poke/pokeContext";
import PokeItem from "./PokeItem";

const PokeList = () => {
  const pokeContext = useContext(PokeContext);
  const { pokemonList, getPokemonList, listNextUrl } =
    pokeContext;

  useEffect(() => {
    getPokemonList(null, 0, 30);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="section">
        <div className="row">
          {pokemonList.map((p) => (
            <PokeItem pokeItem={p} key={p.name} />
            ))}
        </div>
      </div>
      {listNextUrl !== null ? (
      <div className="section">
        <div className="center-align">
          <a
            href='#!'
            className='waves-effect waves-teal btn-flat btn-large center-align'
            onClick={() => getPokemonList(listNextUrl)}
          >
            More Pokemon...
          </a>
        </div>
      </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PokeList;
