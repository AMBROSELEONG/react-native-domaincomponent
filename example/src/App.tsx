import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import DomainTextInput from './DomainTextInput';
import DomainSelect from './DomainSelectBox';
import DomainLoading from './DomainLoading';
import DomainModal from './DomainModal';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
