import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={[styles.text, {color: 'white'}]}>Olá Mundo!</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  page: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 30,
  },
});
