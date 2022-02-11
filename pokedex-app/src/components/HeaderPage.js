import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import pokedex from '../pokedex.png'
import pokedexIcon from '../pokedexIcon.png'
import searchPokemons from '../searchPokemons.png'
import { Tooltip } from '@chakra-ui/react'


const ContainerHeader = styled.div`
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 0.4fr 1.6fr; 
  grid-template-rows: 0.3fr 2.7fr; 
  gap: 0px 0px;
  height: 60px;
  align-items: center;
  padding: 5px;
  background-color: #1616169e;
  color: white;
  
`
const AreaHeader = styled.div` 
grid-area: 1 / 1 / 2 / 2;
`
const PokeLogo = styled.img`
width: 150px;
height: 50px;
margin-left: 500px;
`
const Titulo = styled.div` 
grid-area: 1 / 2 / 2 / 3;
`

const AreaButton = styled.div`
grid-area: 1 / 1 / 2 / 2;
padding-left: 35px;
`
const PokeIcon = styled.img `
width: 40px;
height: 40px;
`
export const HeaderPage = (props) => {
  const pokePath = window.location.pathname
  return (
    <ContainerHeader>
      <AreaHeader />
      <AreaButton>
        <Link to={pokePath === '/pagePokedex' ? '/' : '/pagePokedex'}>
      <Tooltip label={pokePath === '/pagePokedex' ? 'Procurar Pokemons' : 'Ver minha Pokédex'} placement='auto-start'>
          { pokePath === '/pagePokedex' ? <PokeIcon src={searchPokemons}/> : <PokeIcon src={pokedexIcon}/>}
      </Tooltip>
        </Link>
      </AreaButton>
      <Titulo>
        <PokeLogo src={pokedex}></PokeLogo>
      </Titulo>

    </ContainerHeader>
  )
};