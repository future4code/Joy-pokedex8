import React, { useContext } from 'react';
import { CardPokemon } from '../components/CardPokemon';
import { GlobalContext } from '../global/context';
import { ContainerCard, ContainerPincipal } from './PageHome';
import { Title } from './PageDetails';
import { HeaderPage } from '../components/HeaderPage';

export const PagePokedex = (props) => {
  const { states, setters } = useContext(GlobalContext)
  const { listDetailsPokemon } = states
  const { removePokedex } = setters

  const cardPokedex = listDetailsPokemon && listDetailsPokemon.map((poke) => {
    if (poke.isAdded) {
      return (
        <ul key={poke.id}>
          <CardPokemon
            name={poke.name}
            image={poke.sprites.front_default}
            textButton='Remover da Pokedex'
            onClick={() => removePokedex(poke.name)}
            />
        </ul>
      )
    }
  })

  return (
    <ContainerPincipal>
      <HeaderPage textButton='Home'/>
      <Title>Meus Pokémons</Title>
      <ContainerCard>
        {cardPokedex.length && cardPokedex}
      </ContainerCard>
    </ContainerPincipal>
  )
};
