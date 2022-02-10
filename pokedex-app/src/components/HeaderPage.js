import React from 'react';
import styled from 'styled-components'
import { Title } from '../pages/PageDetails';

const Header = styled.div`
background-color: red;
color: white;
height: 50px;
justify-content:space-around;
align-items: center;
display: flex;
`


export const HeaderPage = (props) => {
  return(
  <div> 
    <Header>
        <Title>Pokédex</Title>
    </Header>
    </div>
    )
};
