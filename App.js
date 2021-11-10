import React, {useState} from 'react';
import {View, Button} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-itens: center;
`;
const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid black;
`;

const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: blue;
`;

const StateComponent = () => {
  const [name, setName] = useState('Ivanildo');
  const [bkpName, setBkpName] = useState('');
  const handlePress = () => {
    setBkpName(name);
  };
  return (
    <View>
      <Input value={name} onChangeText={e => setName(e)} />
      <Button title="Salvar" onPress={handlePress} />
      <Label>Nome digitado: {bkpName}</Label>
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
