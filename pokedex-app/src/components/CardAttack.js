import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../global/context';
import { useParams } from 'react-router-dom';

const BoxAttacks = styled.div ` 
height: 420px;
border: black 1px solid;
width: 200px;
padding: 30px;
margin: 20px;
`
export const CardAttack = () => {
  const { states } = useContext(GlobalContext);
  const { name } = useParams()
  const { listDetailsPokemon } = states

  const filteredList = listDetailsPokemon.filter((pokemon) => pokemon.name === name)
  
  
  const getMoves = filteredList[0].moves.map((item) => {
    return (
      <div key={item.id}>
        {item.move.name}
      </div>
    )
  })

  // for (let i=1; getMoves.length<= 10; i++)  {
  //   console.log(i);
  // }
  return (
  <BoxAttacks>
    <p>Principais ataques</p>
    <p>{filteredList && getMoves}</p>
  </BoxAttacks> )
};
