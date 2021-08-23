import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

function PokeMove({pokeMove}) {
  const [move, setMove] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(pokeMove.url);
      setMove(res.data);
    }
    fetchData();
  }, [pokeMove])

  console.log(pokeMove);

  if(!move) 
    return <p>Loading {pokeMove.name}</p>

  const {id, name, effect_entries} = move;

  return (
    <li key={id}>
      <div className="collapsible-header">{name.toUpperCase()}</div>
      <div className="collapsible-body"><span>{effect_entries[0].effect}</span></div>
    </li>
  )
}

PokeMove.propTypes = {
  pokeMove: PropTypes.object.isRequired,
}

export default PokeMove

