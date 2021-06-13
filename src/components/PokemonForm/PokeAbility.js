import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const PokeAbility = ({ pokeAbility }) => {
  const [ability, setAbility] = useState(null);

  useEffect(async () => {
    const res = await axios.get(pokeAbility.ability.url);
    setAbility(res.data);
  }, [pokeAbility]);

  if (ability === null) {
    return (
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    );
  }

  const { names, effect_entries, flavor_text_entries } = ability;

  let en_texts = flavor_text_entries.filter((e) => e.language.name === "en");

  // Set random flavour text
  let rand_text =
    en_texts[Math.floor(Math.random() * en_texts.length)].flavor_text;

  return (
    <li className='collection-item'>
      <span>{names.find((e) => e.language.name === "en").name}</span>
      <blockquote>{rand_text}</blockquote>
      <p>{effect_entries.find((e) => e.language.name === "en").effect}</p>
    </li>
  );
};

PokeAbility.propTypes = {
  pokeAbility: PropTypes.object.isRequired,
};

export default PokeAbility;
