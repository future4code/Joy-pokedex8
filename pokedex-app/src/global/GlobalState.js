import React, { useEffect, useState } from 'react';
import { useRequestData } from '../hooks/useRequestData';
import { GlobalContext } from './context';
//import axios from 'axios';

export const GlobalState = (props, {name}) => {
  const [ pokemons, getPokemons ] = useRequestData(`https://pokeapi.co/api/v2/pokemon`,[])
  // const [ details, getDetails ] = useRequestData(`https://pokeapi.co/api/v2/pokemon/${name}`)
  // const [ pokemonDetails, setPokemonDetails] = useState({})


  //passar pela lista de pokemons, para cada item da lista pegar o nome, guardar em uma lista de nomes
  // const getDetailsPokemon = (name) => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  //     .then((res) => {
  //
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }
  

  // const detailsPokemon = pokemons && pokemons.map((pokemon) => {
  //   return (
  //     <p key={pokemon.name}>
  //     {pokemon.name}
  //     </p>
  // )})
  // setPokemonDetails(detailsPokemon)

  const states = { 
    pokemons
  }
    const requests = {
    getPokemons,

  }


  return (
    <GlobalContext.Provider value={{ states, requests }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
