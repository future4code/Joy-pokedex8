import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GlobalContext } from './context';

export const GlobalState = (props) => {
  const [listDetailsPokemon, setListDetailsPokemon ] = useState([])

  const insertPokedex = (name) => {
    const newPokedex = listDetailsPokemon.map((pokemon) => {
      if (pokemon.name == name){
        pokemon.isAdded = true  
      }
      return pokemon
    })

    setListDetailsPokemon(newPokedex)
  }

  const getAllPokemons = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=20')
      .then(async(res) => {
        const allPokemons = res.data.results
        const promises = allPokemons.map((poke) => {
          return axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        })
        const getPromise = await Promise.all(promises)

        const filteredDetail = getPromise.map((element) => {
          const poke = element.data
          poke.isAdded = false
          return poke
        })
        
        setListDetailsPokemon(filteredDetail)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    insertPokedex()
  }, [])

  useEffect(() => {
    if(!listDetailsPokemon.length){
      getAllPokemons()
    }
  }, [])

  const states = {
    listDetailsPokemon
  }

  const requests = {
    getAllPokemons
  }

  const setters = {
    insertPokedex
  }

  return (
    <GlobalContext.Provider value={{ states, requests, setters }}>
      {props.children}
    </GlobalContext.Provider>
  )
}