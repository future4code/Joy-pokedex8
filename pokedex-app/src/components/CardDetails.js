import React from 'react'
import styled from 'styled-components'
import { TitleCard } from './CardPokemon'

const CardDetail = styled.div ` 
height: 500px;
width: 300px;
padding: 5px;
margin: 20px;
border-radius: 10px;
-webkit-box-shadow: 3px 3px 5px 0px rgba(50, 50, 50, 0.5);
-moz-box-shadow:    3px 3px 5px 0px rgba(50, 50, 50, 0.5);
box-shadow:         3px 3px 5px 0px rgba(50, 50, 50, 0.5);
background-color: #1616169e;
backdrop-filter: blur(32px);
-webkit-backdrop-filter: blur(12px);
display: flex;
flex-direction: column;
`

const PokeList = styled.p`
text-transform: capitalize;
text-align: center;
line-height: 30px;
margin-top: 25px;
color: white;
`

export const CardDetails = (props) => {
  return ( 
  <div>
    <CardDetail>
      <TitleCard> {props.titleCard}</TitleCard> 
      <PokeList>{props.pokeList}</PokeList>
    </CardDetail>
    </div>)
}
