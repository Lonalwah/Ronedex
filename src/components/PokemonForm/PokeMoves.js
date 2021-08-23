import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import PokeMove from './PokeMove'

import M from "materialize-css"

const PokeMoves = ({moves}) => {

  useEffect(() => {
    M.Collapsible.init(document.querySelectorAll(".collapsible"));
  })

  if(!moves) 
    return <p>Loading....</p>

  return (
    <ul className='collapsible'>
      {moves.map((m) => <PokeMove key={m.move.name} pokeMove={m.move} />)}
    </ul>
  )
}

PokeMoves.propTypes = {
    moves: PropTypes.array,
}

export default PokeMoves
