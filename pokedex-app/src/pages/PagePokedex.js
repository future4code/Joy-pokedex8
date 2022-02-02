import React from 'react';
import {Link} from 'react-router-dom'

export const PagePokedex = () => {
  return (
    <div>
      página pokedex
      <Link to="/">
        <button> voltar home</button>
      </Link>

      <Link to="/pageDetails">
        <button> ir para detalhes</button>
      </Link>   
      </div>
  )
};
