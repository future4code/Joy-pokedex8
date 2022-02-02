import React from 'react';
import {Link} from 'react-router-dom'
export const PageHome = () => {
  return (
  <div>
    página inicial
    <Link to="/pageDetails">
      <button> ir para detalhes</button>
    </Link>
    <Link to="/pagePokedex">
      <button> ir para pokedex</button>
    </Link>


  </div>
  )
};
