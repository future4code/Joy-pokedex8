import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const PageDetails = () => {
  return (<div>
    
      <p>DETALHES</p>
      <Link to="/pagePokedex">
        <Button>ir para pokedex</Button>
      </Link>

      <Link to="/">
        <Button> voltar home</Button>
      </Link>
    
    </div>)
};
