import React, { useReducer } from "react";
import axios from "axios";

import PokeContext from "./pokeContext";
import PokeReducer from "./pokeReducer";

import {
  GET_POKEMON_LIST,
  GET_POKEMON,
  SET_LOADING,
  POKEMON_ERROR,
  GET_SPECIES,
} from "../types";

const PokeState = (props) => {
  const initialState = {
    pokemonList: [],
    listNextUrl: null,
    pokemonCount: 0,
    pokemon: null,
    loading: false,
    error: null,
    species: null,
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // Fetch pokeform named list
  const getPokemonList = async (url = null, offset = 0, limit = 20) => {
    try {
      const res = await axios.get(
        url
          ? url
          : `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
      );
      dispatch({
        type: GET_POKEMON_LIST,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: POKEMON_ERROR, payload: error.msg });
    }
  };

  const getPokemon = async (name) => {
    setLoading();
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      dispatch({ type: GET_POKEMON, payload: res.data });
    } catch (error) {
      dispatch({ type: POKEMON_ERROR, payload: error.msg });
    }
  };

  const getSpecies = async (species) => {
    try {
      const res = await axios.get(species.url);
      dispatch({ type: GET_SPECIES, payload: res.data });
    } catch (error) {
      dispatch({ type: POKEMON_ERROR, payload: error.msg });
    }
  };

  return (
    <PokeContext.Provider
      value={{
        pokemonList: state.pokemonList,
        listNextUrl: state.listNextUrl,
        pokemonCount: state.pokemonCount,
        pokemon: state.pokemon,
        species: state.species,
        loading: state.loading,

        getPokemonList,
        getPokemon,
        getSpecies,
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};

export default PokeState;
