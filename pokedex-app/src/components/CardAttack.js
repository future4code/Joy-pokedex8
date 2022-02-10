import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../global/context';
import { useParams } from 'react-router-dom';

const BoxAttacks = styled.div ` 
height: 420px;
width: 200px;
padding: 30px;
margin: 20px;
border-radius: 10px;
-webkit-box-shadow: 3px 3px 5px 0px rgba(50, 50, 50, 0.5);
-moz-box-shadow:    3px 3px 5px 0px rgba(50, 50, 50, 0.5);
box-shadow:         3px 3px 5px 0px rgba(50, 50, 50, 0.5);
`
export const CardAttack = () => {
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

//  const movesArray = []
//  for (let i=0; movesArray.length < 10; i++)  {
//   movesArray.push(getMoves[i])
// }

//  while (movesArray.length <= 10) {
//   movesArray.push(getMoves[movesArray.length])
// }

  return (
    <BoxAttacks>
      <p>PRINCIPAIS ATAQUES</p>
      <p>{filteredList.length && getMoves.slice(-10)}</p>
    </BoxAttacks> )
};
