import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { DomainTextInput, DomainLoading, DomainSwitchButton } from '../../src/index';
import { useState } from 'react';
export default function App() {
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  let haveerror = "";
  if (text) {
    haveerror = "The user name have been used";
  } else {
    haveerror = "";
  }

  return (

    <View style={styles.container}>

      <Text>Result: {isEnabled}</Text>
      <DomainTextInput
        label='User Name'
        name="username"
        nextName='password'
        placeholder="Username"
        helperText={haveerror}
        left={<TouchableOpacity onPress={() => console.log('test')}><Text>test</Text></TouchableOpacity>}
      />
      <View style={{ marginVertical: 30, marginHorizontal: 10 }}>
        <DomainTextInput
          name='password'
          label='Password'
          placeholder="Password"
          value={text}
          onChangeText={setText}
          focusColor="#7174F8"
          keyboardType='numeric'
          right={<Text>@gmail.com</Text>}
          rightWidth={'30%'}
        />
      </View>
      <View style={{ marginVertical: 30, marginHorizontal: 10 }}>
        <DomainTextInput
          name='password'
          label='Password'
          placeholder="Password"
          value={text}
          onChangeText={setText}
          focusColor="#7174F8"
          right={<TouchableOpacity></TouchableOpacity>}
          rightWidth={'10%'}
        />
      </View>
      <DomainSwitchButton
        value={isEnabled}
        onValueChange={setIsEnabled}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} />
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
