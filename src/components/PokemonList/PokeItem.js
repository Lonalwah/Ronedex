import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import PokeContext from "../../context/poke/pokeContext";
import PropTypes from "prop-types";

const PokeItem = ({ pokeItem }) => {
  const pokeContext = useContext(PokeContext);
  const { getPokemon } = pokeContext;

  const [pokeForm, setPokeForm] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-form/${pokeItem.name}`
      );
      setPokeForm(res.data);
    }

    fetchData();
  }, [pokeItem]);

  const onClick = (e) => {
    e.preventDefault();
    getPokemon(pokeItem.name);
  };

  if (!pokeForm)
    return (
      <li>
        <a href='#!' onClick={onClick}>
          <i style={{ width: "48px" }}></i>
          <span className='title'>
            {pokeItem.name.slice(0, 1).toUpperCase() + pokeItem.name.slice(1)}
          </span>
        </a>
      </li>
    );

  const { id, name, sprites } = pokeForm;

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
  pokeItem: PropTypes.object.isRequired,
};

export default PokeItem;
