import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { ButtonComponent } from '../components/ButtonComponent';
import { CardPokemon } from '../components/CardPokemon';
import styled from 'styled-components'
import { BoxButtons } from '../components/BoxButton';
import { GlobalContext } from '../global/context';

export const ContainerCard = styled.div` 
display: flex;
flex-wrap: wrap;
column-gap: 10px;
row-gap: 10px;
width: 100vw;
justify-content: center;
`


export const PageHome = (props) => {
  const { states } = useContext(GlobalContext);
  const { listDetailsPokemon } = states;
  
  const listPokemon = listDetailsPokemon && listDetailsPokemon.map((pokemon) => {
    if(!pokemon.isAdded){ 
      return (
          <ul key={pokemon.name}>
            <CardPokemon 
            name={pokemon.name} 
            image={pokemon.sprites.front_default}
            textButton= 'detalhes'
          /> 
          </ul>
      )
    }
    return
  })

  return (
    <div>
      <BoxButtons>
        <Link to="/pagePokedex">
          <ButtonComponent textButton='Página Pokédex' />
        </Link>
      </BoxButtons>
      <ContainerCard>
        {listPokemon.length && listPokemon}
      </ContainerCard>
    </div>
  )
};
