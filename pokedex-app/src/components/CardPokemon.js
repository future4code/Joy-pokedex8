import { Button, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'

const PokeCard = styled.div`
width: 200px;
height: 300px;
border: 1px solid black;
border-radius: 10px;
-webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.46);
-moz-box-shadow:    4px 4px 5px 0px rgba(50, 50, 50, 0.46);
box-shadow:         4px 4px 5px 0px rgba(50, 50, 50, 0.46);
`

const PokeImage = styled.img` 
width: 80%;
height: 70%;
margin: auto;
`


export const CardPokemon = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState({})
  const { name } = props

  const getDetailsPokemon = (name) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemonDetails(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getDetailsPokemon(name)
  }, [name])


  return (
    <PokeCard>
      <p>{ pokemonDetails ? pokemonDetails.name : 'carregando...'}</p>
      <PokeImage src={pokemonDetails && pokemonDetails.sprites && pokemonDetails.sprites.front_default} />
      <Stack spacing={4} direction='column' align='center'>
        <Button size='xs'>Adicionar a Pokédex</Button>
        <Button size='xs'> Ver detalhes</Button>
      </Stack>
    </PokeCard>);
};
