import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;
const Square = styled.View`
  background-color: ${props => props.color};
  align-self: ${props => (!props.align ? 'flex-start' : props.align)};
  width: 50px;
  height: 50px;
`;

export default () => {
  return (
    <Page>
      <Square align="flex-end" color="red"></Square>
      <Square align="center" color="green"></Square>
      <Square color="blue"></Square>
      <Square color="yellow"></Square>
    </Page>
  );
};
