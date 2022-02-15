import React from 'react';
import { Button } from '@chakra-ui/react';

export const ButtonComponent = (props) => {
  return <div>
    <Button onClick={props.onClick} m='0'variant='solid' size='sm' color='black' >{props.textButton}</Button>
  </div>;
};
