import React from 'react';
import styled from 'styled-components';

const BoxStats = styled.div ` 
height: 420px;
border: black 1px solid;
width: 200px;
padding: 30px;
margin: 20px;
`
export const StatsComponent = () => {
  //acessar o estado que tem os detalhes e em cada li colocar HP, ATTACK, DEFENSE
  //SPECIAL-ATTACK, SPECIAL-DEFENSE, SPEED
  //colocar embaixo o tipo: types.type.name
  return (
  <BoxStats>
    <p>STATS</p>
    <ul>
      <li>teste</li>
      <li>teste</li>
      <li>teste</li>
      <li>teste</li>
      <li>teste</li>
    </ul>
  </BoxStats>
  )
};
