import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function PokeMove({ pokeMove }) {
  const [move, setMove] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(pokeMove.url);
      setMove(res.data);
    }
    fetchData();
  }, [pokeMove]);

  if (!move) return <p>Loading {pokeMove.name}</p>;

  const { id, name, effect_entries, flavor_text_entries } = move;

  let en_texts = flavor_text_entries.filter((e) => e.language.name === "en");

  // Set random flavour text
  let rand_text =
    en_texts[Math.floor(Math.random() * en_texts.length)].flavor_text;

  return (
    <li key={id}>
      <div className='collapsible-header'>{name.toUpperCase()}</div>
      <div className='collapsible-body'>
        <blockquote>{rand_text}</blockquote>
        <span>{effect_entries[0].effect}</span>
      </div>
    </li>
  );
}

PokeMove.propTypes = {
  pokeMove: PropTypes.object.isRequired,
};

export default PokeMove;
