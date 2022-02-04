import React from 'react';
import {Link} from 'react-router-dom'
import { Container, Box, Button } from '@chakra-ui/react'
import { ButtonComponent } from '../components/Button';
import { CardPokemon } from '../components/CardPokemon';
import styled from 'styled-components'
const ContainerCard = styled.div ` 
display: flex;
flex-wrap: wrap;
column-gap: 10px;
row-gap: 10px;
width: 100vw;
justify-content: center;
`
export const PageHome = () => {
  return (
  <div>
    página inicial
    <Link to="/pageDetails">
      <Button> ir para detalhes</Button>
    </Link>
    <Link to="/pagePokedex">
      <button> ir para pokedex</button>
    </Link>
    <ContainerCard>
      <CardPokemon/>
      <CardPokemon/>
      <CardPokemon/>
      <CardPokemon/>
      <CardPokemon/>
      <CardPokemon/>
      <CardPokemon/>
      <CardPokemon/>
      <CardPokemon/>
      <CardPokemon/>
    </ContainerCard>
  </div>
  )
};
