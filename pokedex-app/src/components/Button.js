import React from 'react';
import { Button } from '@chakra-ui/react';

export const ButtonComponent = (props) => {
  return <div>
    <Button colorScheme='blue' size='xs'>{props.text}</Button>
  </div>;
};
