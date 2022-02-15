import React, { useContext } from 'react';
import { CardPokemon } from '../components/CardPokemon';
import styled from 'styled-components'
import { GlobalContext } from '../global/context';
import pokemonBack from '../pokeImg.png'
import { Title } from './PageDetails';
import { HeaderPage } from '../components/HeaderPage';

export const ContainerCard = styled.div` 
display: flex;
flex-wrap: wrap;
column-gap: 10px;
row-gap: 10px;
width: 100vw;
justify-content: center;
`

export const ContainerPincipal = styled.div `
width: 100%;
height: auto;
min-height: 100vh;
justify-content: space-around;
background-color: yellow;
margin: auto;
background-image: url(${pokemonBack});
`
export const PageHome = (props) => {
  const { states, setters } = useContext(GlobalContext);
  const { listDetailsPokemon } = states;
  const { insertPokedex } = setters;

  const listPokemon = listDetailsPokemon && listDetailsPokemon.map((pokemon) => {
    if(!pokemon.isAdded){ 
      return (
          <ul key={pokemon.name}>
            <CardPokemon 
            name={pokemon.name} 
            image={pokemon.sprites.front_default}
            textButton= '+ Pokedex'
            onClick={() => insertPokedex(pokemon.name)}
          /> 
          </ul>
      )
    }
    return
  })

  return (
    <ContainerPincipal>
      <HeaderPage textButton='Pokédex'/>
      <Title>Pokemons Disponíveis</Title>
      <ContainerCard>
        {listPokemon.length && listPokemon}
      </ContainerCard>
    </ContainerPincipal>
  )
};
