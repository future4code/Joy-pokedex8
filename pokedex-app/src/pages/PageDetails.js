import React from 'react';
import { Link } from 'react-router-dom';
import { BoxButtons } from '../components/BoxButton';
import { ButtonComponent } from '../components/ButtonComponent';

export const PageDetails = () => {
  return (
    <div>
      <p>DETALHES</p>
      <BoxButtons>
        <Link to="/pagePokedex">
          <ButtonComponent textButton='Página Pokédex' />
        </Link>
        <Link to="/">
          <ButtonComponent textButton='Home'/>
        </Link>
      </BoxButtons>

    </div>)
};
