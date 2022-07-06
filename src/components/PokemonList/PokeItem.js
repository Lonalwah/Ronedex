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
      <div className="poke-item col s3 l2">
        <a href='#poke-modal' className="modal-trigger" onClick={onClick}>
          <i style={{ width: "48px" }}></i>
          <span className='title'>
            {pokeItem.name.slice(0, 1).toUpperCase() + pokeItem.name.slice(1)}
          </span>
        </a>
      </div>
    );

  const { name, sprites } = pokeForm;

  return (
    <div className="poke-item hoverable col s3 m2">
      <a href='#poke-modal' className="modal-trigger" onClick={onClick}>
        <div className="sprite valign-wrapper center-align">
          <img
            className='responsive-img'
            alt={name}
            src={sprites.front_default}
          />
        </div>
        <div className='center-align'>
          {name.slice(0, 1).toUpperCase() + name.slice(1)}
        </div>
      </a>
    </div>
  );
};

PokeItem.propType = {
  pokeItem: PropTypes.object.isRequired,
};

export default PokeItem;
