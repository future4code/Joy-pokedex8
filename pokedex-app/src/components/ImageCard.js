import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalContext } from '../global/context';

const BoxImgPokemon = styled.div`
height: 200px;
width: 300px;
border: black 1px solid;
margin: 20px;
`


export const ImageCard = () => {
  const { name } = useParams()
  const { states } = useContext(GlobalContext);
  const { listDetailsPokemon } = states;
  
  const filteredList = listDetailsPokemon.filter((pokemon) => pokemon.name === name )
  
  return (
    <div>
      <BoxImgPokemon>
        <img src={filteredList && filteredList[0].sprites.front_default}/>
      </BoxImgPokemon>

      <BoxImgPokemon>
      <img src={filteredList && filteredList[0].sprites.back_default}/>
        
      </BoxImgPokemon>
    </div>
  )
};
