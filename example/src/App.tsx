import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import DomainTextInput from './DomainTextInput';
import DomainSelect from './DomainSelectBox';
import DomainLoading from './DomainLoading';
import DomainModal from './DomainModal';
import DomainCheckbox from './DomainCheckbox';
import DomainRadio from './DomainRadio';
import DomainSlider from './DomainSlider';
import DomainHelperText from './DomainHelperText';
import DomainDropdownMenu from './DomainDropdownMenu';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="DomainTextInput" component={DomainTextInput} options={{ title: 'TextInput' }} />
        <Stack.Screen name="DomainSelect" component={DomainSelect} options={{ title: 'DomainSelect' }} />
        <Stack.Screen name="DomainLoading" component={DomainLoading} options={{ title: 'DomainLoading' }} />
        <Stack.Screen name="DomainModal" component={DomainModal} options={{ title: 'DomainModal' }} />
        <Stack.Screen name="DomainCheckbox" component={DomainCheckbox} options={{ title: 'DomainCheckbox' }} />
        <Stack.Screen name="DomainRadio" component={DomainRadio} options={{ title: 'DomainRadio' }} />
        <Stack.Screen name="DomainSlider" component={DomainSlider} options={{ title: 'DomainSlider' }} />
        <Stack.Screen name="DomainHelperText" component={DomainHelperText} options={{ title: 'DomainHelperText' }} />
        <Stack.Screen name="DomainDropdownMenu" component={DomainDropdownMenu} options={{ title: 'DomainDropdownMenu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
