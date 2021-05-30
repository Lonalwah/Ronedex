import React, { useReducer } from "react";
import axios from "axios";

import PokeContext from "./pokeContext";
import PokeReducer from "./pokeReducer";

import { GET_POKEMON_LIST, QUERY_POKEMON, SET_LOADING } from "../types";

const PokeState = (props) => {
  const initialState = {
    pokemonList: [],
    pokemon: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const getPokemonList = async () => {
    setLoading();
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");

    dispatch({
      type: GET_POKEMON_LIST,
      payload: res.data,
    });
  };

  const getPokemon = async (url) => {
    setLoading();

    const res = await axios.get(url);

    dispatch({
      type: QUERY_POKEMON,
      payload: res.data,
    });
  };

  return (
    <PokeContext.Provider
      value={{
        pokemonList: state.pokemonList,
        pokemon: state.pokemon,
        loading: state.loading,
        getPokemonList,
        getPokemon,
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};

export default PokeState;
