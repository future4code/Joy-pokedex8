import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalContext } from '../global/context';

const BoxImgPokemon = styled.div`
height: 200px;
width: 300px;
margin: 20px;
border-radius: 10px;
-webkit-box-shadow: 3px 3px 5px 0px rgba(50, 50, 50, 0.5);
-moz-box-shadow:    3px 3px 5px 0px rgba(50, 50, 50, 0.5);
box-shadow:         3px 3px 5px 0px rgba(50, 50, 50, 0.5);
`
const PokeImage = styled.img ` 
height: 80%;
width: 80%;
margin: auto;

`

export const ImageCard = () => {
  const { name } = useParams()
  const { states } = useContext(GlobalContext);
  const { listDetailsPokemon } = states;
  
  const filteredList = listDetailsPokemon && listDetailsPokemon.filter((pokemon) => pokemon.name === name )
  
  return (
    <div>
      <BoxImgPokemon>
        <PokeImage src={filteredList.length && filteredList[0].sprites.front_default}/>
      </BoxImgPokemon>

      <BoxImgPokemon>
      <PokeImage src={filteredList.length && filteredList[0].sprites.back_default}/>
        
      </BoxImgPokemon>
    </div>
  )
};
