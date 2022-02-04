import { Button, Stack } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const PokeCard = styled.div `
background-color: red;
width: 200px;
height: 250px;
border-radius: 10px;
-webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.46);
-moz-box-shadow:    4px 4px 5px 0px rgba(50, 50, 50, 0.46);
box-shadow:         4px 4px 5px 0px rgba(50, 50, 50, 0.46);

`

const PokeImage = styled.img ` 
width: 80%;
height: 70%;
margin: auto;
`

export const CardPokemon = () => {
  return(  
  <PokeCard>
   <PokeImage src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'/> 
   <Stack spacing={4} direction='column' align='center'>
   <Button size='xs'>Adicionar a Pokédex</Button>
   <Button size='xs'> Ver detalhes</Button>
   </Stack>
  </PokeCard>);
};
