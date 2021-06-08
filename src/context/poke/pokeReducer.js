import {
  GET_POKEMON_LIST,
  SET_LOADING,
  GET_POKEMON,
  POKEMON_ERROR,
  GET_SPECIES,
} from "../types";

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
        pokemonList: state.pokemonList.concat(action.payload.results),
        listNextUrl: action.payload.next,
        pokemonCount: action.payload.count,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        species: null,
        loading: false,
      };
    case GET_SPECIES:
      return {
        ...state,
        species: action.payload,
      };
    case POKEMON_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default PokeReducer;
