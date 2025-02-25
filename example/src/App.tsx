import { Text, View, StyleSheet } from 'react-native';
import { DomainTextInput } from '../../src/index';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Result: {text}</Text>
      <DomainTextInput value="test" onChangeText={setText} secureTextEntry={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
