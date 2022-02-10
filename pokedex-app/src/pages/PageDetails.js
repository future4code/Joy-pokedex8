import React from 'react';
import { Link } from 'react-router-dom';
import { BoxButtons } from '../components/BoxButton';
import { ButtonComponent } from '../components/ButtonComponent';
import { ImageCard } from '../components/ImageCard';
import { StatsComponent } from '../components/StatsComponent';
import styled from 'styled-components'
import { CardAttack } from '../components/CardAttack';
import { useParams } from 'react-router-dom';
const ContainerDetalhes = styled.div` 
display: flex;
justify-content: center;
`
export const Title = styled.p `
weight: bold;
font-size: 30px;
text-align: center;
`

export const PageDetails = () => {
  const { name } = useParams()
  return (
    <div>
      <BoxButtons>
        <Link to="/pagePokedex">
          <ButtonComponent textButton='Página Pokédex' />
        </Link>
        <Link to="/">
          <ButtonComponent textButton='Home' />
        </Link>
      </BoxButtons>
      <Title>{name}</Title>
      <ContainerDetalhes>
      
        <ImageCard />
        <StatsComponent />
        <CardAttack/>
      </ContainerDetalhes>
    </div>)
};
