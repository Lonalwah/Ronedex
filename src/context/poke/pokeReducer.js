import {
  GET_POKEMON_LIST,
  SET_LOADING,
  QUERY_POKEMON,
  POKEMON_ERROR,
  FETCH_FORM_LIST,
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
        pokemonList: [...state.pokemonList, action.payload].sort((a, b) => {
          return a.id - b.id;
        }),
        loading: false,
      };
    case QUERY_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        species: null,
        loading: false,
      };
    case FETCH_FORM_LIST:
      return {
        ...state,
        formList: action.payload.results,
        formNextUrl: action.payload.next,
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
