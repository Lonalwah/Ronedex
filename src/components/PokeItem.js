import React, { useContext } from "react";
import PokeContext from "../context/poke/pokeContext";
import PropTypes from "prop-types";

const PokeItem = ({ pokemon }) => {
  const pokeContext = useContext(PokeContext);
  const { id, name, sprites } = pokemon;
  const { getPokemon } = pokeContext;

  const onClick = (e) => {
    e.preventDefault();

    getPokemon(name);
  };

  return (
    <li>
      <a href='#!' onClick={onClick}>
        <i style={{ width: "48px" }}>
          <img
            className='circle responsive-img'
            alt={name}
            src={sprites.front_default}
          />
        </i>
        <span className='title'>
          {id}. {name.slice(0, 1).toUpperCase() + name.slice(1)}
        </span>
      </a>
    </li>
  );
};

PokeItem.propType = {
  pokemon: PropTypes.object.isRequired,
};

export default PokeItem;
