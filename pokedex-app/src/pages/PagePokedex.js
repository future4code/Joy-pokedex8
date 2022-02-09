import React from 'react';
import { Link } from 'react-router-dom'
import { BoxButtons } from '../components/BoxButton';
import { ButtonComponent } from '../components/ButtonComponent';

export const PagePokedex = () => {
  return (
    <div>
      página pokedex
      <BoxButtons>
        <Link to="/">
          <ButtonComponent textButton='Home' />
        </Link>
        <Link to="/pageDetails">
          <ButtonComponent textButton='Página Detalhes' />
        </Link>
      </BoxButtons>
    </div>
  )
};
