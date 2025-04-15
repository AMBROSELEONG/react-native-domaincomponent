"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("@react-navigation/native");
const stack_1 = require("@react-navigation/stack");
const Home_1 = __importDefault(require("./Home"));
const DomainTextInput_1 = __importDefault(require("./DomainTextInput"));
const DomainSelectBox_1 = __importDefault(require("./DomainSelectBox"));
const DomainLoading_1 = __importDefault(require("./DomainLoading"));
const DomainModal_1 = __importDefault(require("./DomainModal"));
const DomainCheckbox_1 = __importDefault(require("./DomainCheckbox"));
const DomainRadio_1 = __importDefault(require("./DomainRadio"));
const DomainSlider_1 = __importDefault(require("./DomainSlider"));
const DomainHelperText_1 = __importDefault(require("./DomainHelperText"));
const DomainDropdownMenu_1 = __importDefault(require("./DomainDropdownMenu"));
const DomainHeader_1 = __importDefault(require("./DomainHeader"));
const DomainAlert_1 = __importDefault(require("./DomainAlert"));
// import DomainMultipleSelect from './DomainMultipleSelect';
const Stack = (0, stack_1.createStackNavigator)();
const App = () => {
    return (<native_1.NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home_1.default} options={{ title: 'Home' }}/>
        <Stack.Screen name="DomainTextInput" component={DomainTextInput_1.default} options={{ title: 'TextInput' }}/>
        <Stack.Screen name="DomainSelect" component={DomainSelectBox_1.default} options={{ title: 'DomainSelect' }}/>
        <Stack.Screen name="DomainLoading" component={DomainLoading_1.default} options={{ title: 'DomainLoading' }}/>
        <Stack.Screen name="DomainModal" component={DomainModal_1.default} options={{ title: 'DomainModal' }}/>
        <Stack.Screen name="DomainCheckbox" component={DomainCheckbox_1.default} options={{ title: 'DomainCheckbox' }}/>
        <Stack.Screen name="DomainRadio" component={DomainRadio_1.default} options={{ title: 'DomainRadio' }}/>
        <Stack.Screen name="DomainSlider" component={DomainSlider_1.default} options={{ title: 'DomainSlider' }}/>
        <Stack.Screen name="DomainHelperText" component={DomainHelperText_1.default} options={{ title: 'DomainHelperText' }}/>
        <Stack.Screen name="DomainDropdownMenu" component={DomainDropdownMenu_1.default} options={{ title: 'DomainDropdownMenu' }}/>
        <Stack.Screen name="DomainHeader" component={DomainHeader_1.default} options={{ headerShown: false }}/>
        <Stack.Screen name="DomainAlert" component={DomainAlert_1.default} options={{ title: 'DomainHeader' }}/>
        {/* <Stack.Screen name="DomainMultipleSelect" component={DomainMultipleSelect} options={{ title: 'DomainMultipleSelect' }} /> */}
      </Stack.Navigator>
    </native_1.NavigationContainer>);
};
exports.default = App;
