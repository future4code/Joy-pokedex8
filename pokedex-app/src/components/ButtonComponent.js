import React from 'react';
import { Button } from '@chakra-ui/react';

export const ButtonComponent = (props) => {
  return <div>
    <Button onClick={props.onClick} colorScheme='blue' size='xs'>{props.textButton}</Button>
  </div>;
};
