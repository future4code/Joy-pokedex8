import { Button, Stack } from '@chakra-ui/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonComponent } from './ButtonComponent';

const PokeCard = styled.div`
width: 200px;
height: 300px;
border-radius: 10px;
-webkit-box-shadow: 5px 3px 5px 0px rgba(50, 50, 50, 0.5);
-moz-box-shadow:    5px 3px 5px 0px rgba(50, 50, 50, 0.5);
box-shadow:         3px 3px 5px 0px rgba(50, 50, 50, 0.5);
background-color: #1616169e;
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
`
const PokeImage = styled.img` 
width: 90%;
height: 55%;
margin: auto;
`
export const TitleCard = styled.p ` 
text-align: center;
text-transform: uppercase;
padding: 5px;
font-weight: 700;
color: #234e52;
background-color: #ffd144;
border-radius: 5px;
`
export const CardPokemon = (props) => {
  return (
    <PokeCard>
      <TitleCard>{props.name ? props.name : 'carregando...'}</TitleCard>
      <p>{props.type}</p>
      <PokeImage src={props.image} />
      <Stack spacing={4} direction='column' align='center'>
        <Link to={`/pageDetails/${props.name}`}>
          <Button color='black' variant='solid' size='sm'>Detalhes</Button>
        </Link>
        <ButtonComponent onClick={props.onClick} textButton={props.textButton} variant='solid' size='xs'/>
      </Stack>
    </PokeCard>);
}
