import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GlobalContext } from './context';

export const GlobalState = (props) => {
  const [listDetailsPokemon, setListDetailsPokemon ] = useState([])

  const getAllPokemons = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=20')
      .then(async(res) => {
        const allPokemons = res.data.results
        const promises = allPokemons.map((poke) => {
          return axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        })
        const getPromise = await Promise.all(promises)

        const filteredDetail = getPromise.map((element) => element.data)
        
        setListDetailsPokemon(filteredDetail)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  const states = {
    listDetailsPokemon
  }

  const requests = {
    getAllPokemons
  }

  return (
    <GlobalContext.Provider value={{ states, requests }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

// const getDetailsPokemon = async() => {
//   let promises = pokemons && pokemons.map(poke => {
//     return axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
//   })

//   const details = await Promise.all(promises)

//   setPokemonDetails(details)
//   console.log(details);
// }

 
  // }