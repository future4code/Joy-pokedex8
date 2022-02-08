import React, { useEffect, useState } from 'react';
import { useRequestData } from '../hooks/useRequestData';
import { GlobalContext } from './context';

export const GlobalState = (props) => {
  const [ pokemons, getPokemons ] = useRequestData(`https://pokeapi.co/api/v2/pokemon`,[])
  const [ pokemonDetails, setPokemonDetails] = useState({})
  const [ listNamesPokemon, setListNamesPokemon] = useState([])
  
  //objeto guardando os states
  const states = { 
    pokemons,
    pokemonDetails,
    listNamesPokemon 
  }
  
  //objeto guardando nossas requisições
  const requests = {
    getPokemons
  }

  return (
    <GlobalContext.Provider value={{ states, requests }}>
      {props.children}
    </GlobalContext.Provider>
  )
};
