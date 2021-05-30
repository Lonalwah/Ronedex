import { GET_POKEMON_LIST, SET_LOADING, QUERY_POKEMON } from "../types";

const PokeReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.payload.results,
        loading: false,
      };
    case QUERY_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default PokeReducer;
