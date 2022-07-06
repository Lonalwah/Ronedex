import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import PokeContext from "../../context/poke/pokeContext";
import PokeSpecies from "./PokeSpecies";

const PokeDetail = ({ pokemon }) => {
  const pokeContext = useContext(PokeContext);
  const { loading, species, getSpecies } = pokeContext;

  useEffect(() => {
    if (pokemon !== null) getSpecies(pokemon.species);
  }, [pokemon]);

  if (loading || !pokemon || !species)
    return (
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    );

  const { name, sprites, types } = pokemon;

  return (
    <div className='poke-detail'>
      <div className='center-align'>
        <img
          alt={`official artwork ${name}`}
          src={sprites.other["official-artwork"].front_default}
        />
        <p className='center-align'>
          No.{" "}
          {String(
            species.pokedex_numbers.find(
              (e) => e.pokedex.name === "national"
            ).entry_number
          ).padStart(3, "0")}
        </p>
      </div>
      <div className='card-title'>
        <h4>
          {species.names.find((e) => e.language.name === "en").name}
        </h4>
      </div>
      <PokeSpecies species={species} />
      <dl>
        <dt>Type</dt>
        <dd>
          {types.map((t) => (
            <span key={t.type.name} className='badge blue white-text'>
              {t.type.name}
            </span>
          ))}
        </dd>
      </dl>
    </div>
  );
};

PokeDetail.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokeDetail;
