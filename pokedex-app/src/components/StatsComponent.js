import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalContext } from '../global/context';

const BoxStats = styled.div` 
height: 420px;
border: black 1px solid;
width: 200px;
padding: 30px;
margin: 20px;
`
export const StatsComponent = () => {
  const { name } = useParams()
  const { states } = useContext(GlobalContext)
  const { listDetailsPokemon } = states

  const filteredList = listDetailsPokemon.filter((pokemon) => pokemon.name === name)
  console.log(filteredList);

  const getStats = filteredList[0].stats.map((item) => {
    return (
      <div key={item.id}>
        {item.stat.name}: 
        {item.base_stat}
      </div>
    )
  })
  
    return (
      <BoxStats>
        <p>Poderes</p>
          <p>{ filteredList && getStats}</p>
      </BoxStats>
    )
};
