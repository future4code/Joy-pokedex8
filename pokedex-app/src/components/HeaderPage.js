import React from 'react';
import styled from 'styled-components'

const Header = styled.div`
background-color: yellow;
color: red;
height: 50px;
justify-content:space-around;
align-items: center;
display: flex;
`


export const HeaderPage = (props) => {
  return(
  <div> 
    <Header>
        <p>Pokédex</p>
    </Header>
    </div>
    )
};
