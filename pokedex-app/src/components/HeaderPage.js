import React from 'react';
import styled from 'styled-components'
import { ButtonComponent } from './Button';


const Header = styled.div`
background-color: yellow;
color: red;
height: 50px;
justify-content:space-around;
align-items: center;
display: flex;
`


export const HeaderPage = () => {
  return(
  <div> 
    <Header>
        <ButtonComponent>botão</ButtonComponent>
        <p>Pokédex</p>
      
    </Header>
    </div>
    )
};
