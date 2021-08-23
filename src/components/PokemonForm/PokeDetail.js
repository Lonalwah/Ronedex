import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from "prop-types";
import PokeContext from "../../context/poke/pokeContext";
import PokeSpecies from "./PokeSpecies";

const PokeDetail = ({pokemon}) => {
  const pokeContext = useContext(PokeContext);
  const {loading, species, getSpecies } = pokeContext;

  useEffect(() => {
    if (pokemon !== null) getSpecies(pokemon.species);
  }, [pokemon]);

  if (loading || !pokemon || !species)
    return (
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    );
  
  const { name, sprites, types, height, weight } = pokemon;

  return (
    <Fragment>
      <div className='card'>
        <div className='row'>
          <div className='col s3'>
            <div className='card-image'>
            <img alt={`official artwork ${name}`}
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
            </div>
            <div className='col s9'>
                <div className='card-content'>
                <span className='card-title'>
                    {species.names.find((e) => e.language.name === "en").name}
                </span>
                <PokeSpecies species={species} />
                <div className='collection'>
                    <li className='collection-item'>
                    <span className='title'>Type</span>
                    <span className='secondary-content'>
                        {types.map((t) => (
                        <span key={t.type.name} className='badge blue white-text'>
                            {t.type.name}
                        </span>
                        ))}
                    </span>
                    </li>
                    <li className='collection-item'>
                    <span className='title'>Height</span>
                    <span className='secondary-content'>{height}</span>
                    </li>
                    <li className='collection-item'>
                    <span className='title'>Weight</span>
                    <span className='secondary-content'>{weight}</span>
                    </li>
                </div>
                </div>
            </div>
            </div>
      </div>
    </Fragment>
    )
}

PokeDetail.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokeDetail
