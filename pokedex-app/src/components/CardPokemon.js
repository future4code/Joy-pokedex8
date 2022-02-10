import { Button, Stack } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { GlobalContext } from '../global/context';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ButtonComponent } from './ButtonComponent';

const PokeCard = styled.div`
width: 200px;
height: 300px;
border-radius: 10px;
-webkit-box-shadow: 3px 3px 5px 0px rgba(50, 50, 50, 0.5);
-moz-box-shadow:    3px 3px 5px 0px rgba(50, 50, 50, 0.5);
box-shadow:         3px 3px 5px 0px rgba(50, 50, 50, 0.5);
`
const PokeImage = styled.img` 
width: 80%;
height: 70%;
margin: auto;
`
export const CardPokemon = (props) => {
  const { states, requests, setters } = useContext(GlobalContext);
  const { name } = useParams()
  const { listDetailsPokemon, pokedex } = states
  const { insertPokedex } = setters

  return (
    <PokeCard>
      <p>{props.name ? props.name : 'carregando...'}</p>
      <p>{props.type}</p>
      <PokeImage src={props.image} />
      <Stack spacing={4} direction='column' align='center'>
        <Link to={`/pageDetails/${props.name}`}>
          <Button variant='solid' size='xs'>DETALHES</Button>
        </Link>
        <Button onClick={() => insertPokedex(props.name)} variant='solid' size='xs'>Inserir Pokedex</Button>

      </Stack>
    </PokeCard>);
}
