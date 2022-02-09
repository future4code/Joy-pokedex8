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
  const { states, requests } = useContext(GlobalContext);
  const { pokemonDetails } = states;
  const { getDetailsPokemon } = requests
  const { name } = useParams()

  console.log(getDetailsPokemon);
  return (
  <BoxAttacks>
    <p>Principais ataques</p>
  </BoxAttacks> )
};
