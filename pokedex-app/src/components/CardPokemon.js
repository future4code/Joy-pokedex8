import { Button, Stack } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { GlobalContext } from '../global/context';
import { Link } from 'react-router-dom';

const PokeCard = styled.div`
width: 200px;
height: 300px;
border: 1px solid black;
border-radius: 10px;
-webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.46);
-moz-box-shadow:    4px 4px 5px 0px rgba(50, 50, 50, 0.46);
box-shadow:         4px 4px 5px 0px rgba(50, 50, 50, 0.46);
`
const PokeImage = styled.img` 
width: 80%;
height: 70%;
margin: auto;
`
export const CardPokemon = (props) => {

  return (
    <PokeCard>
      <p>{props.name ? props.name : 'carregando...'}</p>
      <p>{props.type}</p>
      <PokeImage src={props.image} />
      <Stack spacing={4} direction='column' align='center'>
        <Link to={`/pageDetails/${props.name}`}>
          <Button>DETALHES</Button>
        </Link>
        <Button size='xs'>Adicionar a Pokédex</Button>
      </Stack>
    </PokeCard>);
};
