import React from 'react';
import { Link } from 'react-router-dom';
import { BoxButtons } from '../components/BoxButton';
import { ButtonComponent } from '../components/ButtonComponent';
import { ImageCard } from '../components/ImageCard';
import { StatsComponent } from '../components/StatsComponent';
import styled from 'styled-components'
import { CardAttack } from '../components/CardAttack';
import { useParams } from 'react-router-dom';
import { ContainerPincipal } from '.';
import { HeaderPage } from '../components/HeaderPage';

const ContainerDetalhes = styled.div` 
display: flex;
justify-content: center;
`
export const Title = styled.p `
weight: bold;
font-size: 30px;
text-align: center;
color: #234e52;
background-color: #ffd144;
width: 400px;
margin: auto;
margin-top: 10px;
margin-bottom: 10px;
border-radius: 10px;
`

export const PageDetails = () => {
  const { name } = useParams()
  return (
    <ContainerPincipal>

      <HeaderPage/>
      
      <BoxButtons>
        <Link to="/pagePokedex">
          <ButtonComponent textButton='Página Pokédex' />
        </Link>
        <Link to="/">
          <ButtonComponent textButton='Home' />
        </Link>
      </BoxButtons>
      
      <ContainerDetalhes>
        <StatsComponent />
        <ImageCard />
        <CardAttack/>
      </ContainerDetalhes>
    </ContainerPincipal>)
};
