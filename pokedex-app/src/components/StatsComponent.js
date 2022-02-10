import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalContext } from '../global/context';

const BoxStats = styled.div` 
height: 420px;
width: 200px;
padding: 30px;
margin: 20px;
border-radius: 10px;
-webkit-box-shadow: 3px 3px 5px 0px rgba(50, 50, 50, 0.5);
-moz-box-shadow:    3px 3px 5px 0px rgba(50, 50, 50, 0.5);
box-shadow:         3px 3px 5px 0px rgba(50, 50, 50, 0.5);
`
export const StatsComponent = () => {
  const { name } = useParams()
  const { states } = useContext(GlobalContext)
  const { listDetailsPokemon } = states

  const filteredList = listDetailsPokemon.filter((pokemon) => pokemon.name === name)

  const getStats = filteredList.length && filteredList[0].stats.map((itemStats) => {
    return (
      <div key={itemStats.stat.url}>
        {itemStats.stat.name}:
        {itemStats.base_stat}
      </div>
    )
  })

  return (
    <BoxStats>
      <p>PODERES</p>
      <p>{filteredList.length && getStats}</p>
    </BoxStats>
  )
};
