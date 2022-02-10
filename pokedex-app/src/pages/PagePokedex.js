import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { BoxButtons } from '../components/BoxButton';
import { ButtonComponent } from '../components/ButtonComponent';
import { CardPokemon } from '../components/CardPokemon';
import { GlobalContext } from '../global/context';
import { ContainerCard } from './PageHome';
import styled from 'styled-components';

export const PagePokedex = (props) => {
  //importar estados globais
  const { states } = useContext(GlobalContext)
  const { listDetailsPokemon } = states


  const cardPokedex = listDetailsPokemon && listDetailsPokemon.map((poke) => {
    if (poke.isAdded) {
      return (
        <ul key={poke.id}>
          <CardPokemon
            name={poke.name}
            image={poke.sprites.front_default}
            />
        </ul>
      )
    }
  })

  return (
    <div>
      <BoxButtons>
        <Link to="/">
          <ButtonComponent textButton='Home' />
        </Link>
      </BoxButtons>
      <ContainerCard>
        {cardPokedex.length && cardPokedex}
      </ContainerCard>
    </div>
  )
};
