import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ButtonComponent } from '../components/ButtonComponent';
import { CardPokemon } from '../components/CardPokemon';
import styled from 'styled-components'
import { BoxButtons } from '../components/BoxButton';
import axios from 'axios';
import { Button } from '@chakra-ui/react';

const ContainerCard = styled.div` 
display: flex;
flex-wrap: wrap;
column-gap: 10px;
row-gap: 10px;
width: 100vw;
justify-content: center;
`


export const PageHome = () => {
  const [pokemons, setPokemon] = useState([])

  const getListPokemons = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        setPokemon(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const listPokemon = pokemons && pokemons.map((pokemon) => {
    return (
      <div key={pokemon.name}>
        <CardPokemon name={pokemon.name}
        />
      </div>
    )
  })

  return (
    <div>
      <BoxButtons>
        <Link to="/pageDetails">
          <ButtonComponent textButton='Página Detalhes' />
        </Link>
        <Link to="/pagePokedex">
          <ButtonComponent textButton='Página Pokédex' />
        </Link>
      </BoxButtons>
      <ButtonComponent onClick={getListPokemons} textButton='buscar pokemons' />
      <ContainerCard>
        {listPokemon}
      </ContainerCard>
    </div>
  )
};
