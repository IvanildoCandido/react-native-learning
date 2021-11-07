import React from 'react';
import styled from 'styled-components/native';

const TextStd = styled.Text`
  color: ${props => props.color};
  font-size: 30px;
`;
const SafeAreaViewStd = styled.Text`
  flex: 1;
  background-color: cyan;
`;

export default () => {
  return (
    <SafeAreaViewStd>
      <TextStd color="red">Texto Vermelho!</TextStd>
      <TextStd color="yellow">Texto Amarelo!</TextStd>
    </SafeAreaViewStd>
  );
};
