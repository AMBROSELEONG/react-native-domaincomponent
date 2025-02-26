import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DomainTextInput, DomainSwitchButton, DomainSelect, DomainLoading } from 'domaincomponent';
import { useEffect, useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  let haveerror = "";
  if (text) {
    haveerror = "The user name have been used";
  } else {
    haveerror = "";
  }
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const [selectedPhoneValue, setSelectedPhoneValue] = useState<string | undefined>(undefined);
  const phoneOptions = [
    {
      id: '+60',
      name: '+60',
    },
    {
      id: '+61',
      name: '+61',
    },
    {
      id: '+62',
      name: '+62',
    },
  ];

  const [phone, setPhone] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://192.168.0.184:5285/api/Country", {
          method: 'GET',
        });
        const data = await response.json();
        const countryOptions = data.map((country: any) => ({
          id: country.id,
          name: country.name,
          left: <Image source={{ uri: country.flag }} style={{ width: 20, height: 20 }} />,
          right: <Text>{country.code}</Text>
        }));
        setOptions(countryOptions);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);


  if (loading) {
    <DomainLoading loading={loading} />
  }

  return (

    <View style={styles.container}>

      <Text>Result: {selectedPhoneValue + phone}</Text>
      <DomainTextInput
        label='User Name'
        name="username"
        nextName='password'
        placeholder="Username"
        helperText={haveerror}
        left={<TouchableOpacity onPress={() => console.log('test')}><Text>test</Text></TouchableOpacity>}
      />
      <View style={{ marginVertical: 20 }}>
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
      <DomainSwitchButton
        value={isEnabled}
        onValueChange={setIsEnabled}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />

      <DomainSelect
        options={options}
        value={selectedValue}
        onChange={setSelectedValue}
        placeholder="Select a country"
        label='Country'
        resetButton={true}
      />
      <View style={{ marginVertical: 20 }}>
        <DomainTextInput
          label='Phone Number'
          name="phone"
          placeholder="phone"
          leftWidth={50}
          keyboardType='phone-pad'
          value={phone}
          onChangeText={setPhone}
          left={<DomainSelect
            options={phoneOptions}
            value={selectedPhoneValue}
            onChange={setSelectedPhoneValue}
            placeholder=''
            style={{ borderWidth: 0 }}
          />}
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
