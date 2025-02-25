import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { DomainTextInput } from '../../src/index';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  let haveerror = "";
  if (text) {
    haveerror = "The user name have been used";
  } else {
    haveerror = "";
  }
  return (
    <View style={styles.container}>
      <Text>Result: {text}</Text>
      <DomainTextInput
        name="username"
        nextName='password'
        placeholder="Username"
        helperText={haveerror}
      />
      <View style={{ marginVertical: 30, marginHorizontal: 10 }}>
        <DomainTextInput
          name='password'
          placeholder="Password"
          value={text}
          onChangeText={setText}
          focusColor="#7174F8"
          left={<TouchableOpacity onPress={() => console.log('test')}><Text>test</Text></TouchableOpacity>}
          right={<Text>@gmail.com</Text>}
          rightWidth={'30%'}
        />
      </View>
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
