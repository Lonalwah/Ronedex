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
      <div className='poke-detail card'>
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
                <div className='card-title'>
                  <span>
                    {species.names.find((e) => e.language.name === "en").name}
                  </span>
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
                  <dt>Height</dt>
                  <dd>{height}</dd>
                  <dt>Weight</dt>
                  <dd>{weight}</dd>
                </dl>
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
