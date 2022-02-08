import React from 'react';
import styled from 'styled-components';

const BoxImgPokemon = styled.div`
height: 200px;
width: 300px;
border: black 1px solid;
margin: 20px;
`


export const ImageCard = () => {
  //importar state do context
  //sprites.front_default
  //sprites.back_default

  return (
    <div>
      <BoxImgPokemon>
        <p>imagem</p>
      </BoxImgPokemon>

      <BoxImgPokemon>
        <p>imagem</p>
      </BoxImgPokemon>
    </div>
  )
};
