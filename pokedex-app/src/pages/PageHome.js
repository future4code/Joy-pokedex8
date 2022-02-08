import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { ButtonComponent } from '../components/ButtonComponent';
import { CardPokemon } from '../components/CardPokemon';
import styled from 'styled-components'
import { BoxButtons } from '../components/BoxButton';
import { GlobalContext } from '../global/context';

const ContainerCard = styled.div` 
display: flex;
flex-wrap: wrap;
column-gap: 10px;
row-gap: 10px;
width: 100vw;
justify-content: center;
`


export const PageHome = () => {
  const { states, requests } = useContext(GlobalContext);
  const { pokemons } = states;
  const { getPokemons } = requests
  
  useEffect(() => { 
    getPokemons()
  }, [])


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
      <ContainerCard>
        {listPokemon}
      </ContainerCard>
    </div>
  )
};
