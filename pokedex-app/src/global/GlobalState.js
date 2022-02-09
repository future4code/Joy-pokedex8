import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GlobalContext } from './context';

export const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([])
  const [listDetailsPokemon, setListDetailsPokemon ] = useState([])

  const getAllPokemons = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=20')
      .then((res) => {
        setPokemons(res.data.results)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllPokemons()
    const pokemonsList = pokemons
  
    for(let poke of pokemonsList) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
      .then((res)=> { 
        console.log('resposta api', typeof res);
        setListDetailsPokemon(res.data)
      })
      .catch((err) => console.log(err))
    }
  }, [])
 
  
  const states = {
    pokemons,
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