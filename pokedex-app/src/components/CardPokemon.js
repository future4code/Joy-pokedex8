import { Button, Stack } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { GlobalContext } from '../global/context';

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
  const { states } = useContext(GlobalContext);
  const { pokemonDetails } = states

  const listaFiltrada = pokemonDetails &&
    pokemonDetails.filter((poke) => poke.name === props.name )

  return (
    <PokeCard>
      <p>{ listaFiltrada ? listaFiltrada.name : 'carregando...'}</p>
      <PokeImage src={listaFiltrada && listaFiltrada.sprites && listaFiltrada.sprites.front_default} />
      <Stack spacing={4} direction='column' align='center'>
        <Button size='xs'>Adicionar a Pokédex</Button>
      </Stack>
    </PokeCard>);
};
