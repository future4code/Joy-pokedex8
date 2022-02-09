import React from 'react';
import { Link } from 'react-router-dom';
import { BoxButtons } from '../components/BoxButton';
import { ButtonComponent } from '../components/ButtonComponent';
import { ImageCard } from '../components/ImageCard';
import { StatsComponent } from '../components/StatsComponent';
import styled from 'styled-components'
import { CardAttack } from '../components/CardAttack';

const ContainerDetalhes = styled.div` 
display: flex;
`

export const PageDetails = () => {
  return (
    <div>
      <p>DETALHES</p>
      <BoxButtons>
        <Link to="/pagePokedex">
          <ButtonComponent textButton='Página Pokédex' />
        </Link>
        <Link to="/">
          <ButtonComponent textButton='Home' />
        </Link>
      </BoxButtons>
      <ContainerDetalhes>
        <ImageCard />
        <StatsComponent />
        <CardAttack/>
      </ContainerDetalhes>
    </div>)
};
