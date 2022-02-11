import React from 'react';
import { Button } from '@chakra-ui/react';
import styled from 'styled-components';


export const ButtonComponent = (props) => {
  return <div>
    <Button onClick={props.onClick} m='0'variant='outline' size='xs' color='black' >{props.textButton}</Button>
  </div>;
};
