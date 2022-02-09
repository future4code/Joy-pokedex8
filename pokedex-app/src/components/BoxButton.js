import React from 'react';
import styled from 'styled-components';

export const BoxButtons = styled.div` 
display: flex;
padding: 5px;
column-gap: 20px;
justify-content: center;
margin-top: 10px;
margin-bottom: 10px;
` 
export const BoxButton = () => {
  return(  
    <div>
      <BoxButtons></BoxButtons>
    </div>
  );
};
