import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-itens: center;
`;
const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid black;
`;

const StateComponent = () => {
  const [name, setName] = useState('Ivanildo');
  return (
    <View>
      <Input value={name} onChangeText={e => setName(e)} />
      <Text>Nome digitado: {name}</Text>
    </View>
  );
};

export default () => {
  return (
    <Page>
      <StateComponent />
    </Page>
  );
};
