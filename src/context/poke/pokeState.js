import React, { useReducer } from "react";
import axios from "axios";

import PokeContext from "./pokeContext";
import PokeReducer from "./pokeReducer";

import {
  GET_POKEMON_LIST,
  QUERY_POKEMON,
  SET_LOADING,
  POKEMON_ERROR,
  FETCH_FORM_LIST,
} from "../types";

const PokeState = (props) => {
  const initialState = {
    pokemonList: [],
    pokemon: null,
    loading: false,
    error: null,

    formList: [],
    formNextUrl: null,
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // Fetch pokeform named list
  const fetchFormList = async (url = null, offset = 0, limit = 20) => {
    setLoading();
    try {
      const res = await axios.get(
        url
          ? url
          : `https://pokeapi.co/api/v2/pokemon-form/?offset=${offset}&limit=${limit}`
      );
      dispatch({
        type: FETCH_FORM_LIST,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: POKEMON_ERROR, payload: error.msg });
    }
  };

  const getPokemonList = async (fetchList) => {
    setLoading();

    try {
      fetchList.forEach(async (f) => {
        const res = await axios.get(f.url);
        dispatch({
          type: GET_POKEMON_LIST,
          payload: res.data,
        });
      });
    } catch (error) {
      dispatch({ type: POKEMON_ERROR, payload: error.msg });
    }
  };

  const getPokemon = async (name) => {
    setLoading();
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      dispatch({ type: QUERY_POKEMON, payload: res.data });
    } catch (error) {
      dispatch({ type: POKEMON_ERROR, payload: error.msg });
    }
  };

  return (
    <PokeContext.Provider
      value={{
        pokemonList: state.pokemonList,
        pokemon: state.pokemon,
        loading: state.loading,
        formList: state.formList,
        formNextUrl: state.formNextUrl,
        getPokemonList,
        getPokemon,
        fetchFormList,
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};

export default PokeState;
