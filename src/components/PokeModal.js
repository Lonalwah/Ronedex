import React, { useRef, useEffect, useContext } from 'react';
import PokeContext from '../context/poke/pokeContext';
import PokeDetail from './PokemonForm/PokeDetail';
import M from 'materialize-css';

const PokeModal = () => {
  const pokeContext = useContext(PokeContext);
  const { pokemon } = pokeContext;
  const modal = useRef(null);

  useEffect(() => {
    M.Modal.init(modal);
  }, []);
  
  return (
    <div id='poke-modal' ref={modal} className='modal'>
      {
        pokemon &&
        <div className="modal-content">
          <PokeDetail pokemon={pokemon} />
        </div>
      }
    </div>
  )
}

export default PokeModal