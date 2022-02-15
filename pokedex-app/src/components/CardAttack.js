import React, { useContext } from 'react';
import { GlobalContext } from '../global/context';
import { useParams } from 'react-router-dom';
import { CardDetails } from './CardDetails';


export const CardAttack = (props) => {
  const { states } = useContext(GlobalContext);
  const { name } = useParams()
  const { listDetailsPokemon } = states

  const filteredList = listDetailsPokemon.filter((pokemon) => pokemon.name === name)
  
  
  const getMoves = filteredList.length && filteredList[0].moves.map((item) => {
    return (
      <div key={item.move.url}>
        {item.move.name}
      </div>
    )
  })

  return (
    <CardDetails 
    titleCard='Principais Ataques'
    pokeList={filteredList.length && getMoves.slice(-10)}
    />
  )
};
    