import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-itens: center;
`;

const Hello = ({frase}) => {
  return <Text>{frase}</Text>;
};
const StateComponent = () => {
  const [name, setName] = useState('Ivanildo');
  return <Text>{name}</Text>;
};

export default () => {
  return (
    <Page>
      <Hello frase="Olá Mundo!" />
      <StateComponent />
    </Page>
  );
};
