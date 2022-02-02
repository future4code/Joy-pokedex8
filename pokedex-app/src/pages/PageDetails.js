import React from 'react';
import {Link} from 'react-router-dom'

export const PageDetails = () => {
  return (<div>
    pagina detalhes
    <Link to="/pagePokedex">
     <button> ir para pokedex</button>
    </Link>

    <Link to="/">
      <button> voltar home</button>
    </Link>
    </div>)
};
