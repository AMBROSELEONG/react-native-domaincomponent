"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const domaincomponent_1 = require("domaincomponent");
const FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
const react_1 = require("react");
const DomainTextInputExample = () => {
    const [username, setUsername] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [gmail, setGmail] = (0, react_1.useState)('');
    const [secure, setSecure] = (0, react_1.useState)(true);
    const [passwordError, setPasswordError] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        checkPassword(password);
    }, [password]);
    const checkPassword = (password) => {
        if (!password)
            return false;
        const minLength = /.{8,}/;
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        const digit = /\d/;
        const specialChar = /[@#$%^&*(),.?":{}|<>]/;
        if (minLength.test(password) &&
            uppercase.test(password) &&
            lowercase.test(password) &&
            digit.test(password) &&
            specialChar.test(password)) {
            return setPasswordError('');
        }
        else {
            return setPasswordError('Password does not meet requirements');
        }
    };
    return (<domaincomponent_1.DomainMainContainer keyboardAvoidingEnabled={true}>
            <react_native_1.Text>User Name: {username}</react_native_1.Text>
            <react_native_1.Text>Password: {password}</react_native_1.Text>
            <react_native_1.Text>Gmail: {gmail}@gmail.com</react_native_1.Text>
            <react_native_1.View style={{ alignItems: 'center' }}>
                <react_native_1.View style={{ width: '80%', }}>

                    <react_native_1.View style={{ marginVertical: 10 }}>
                        <domaincomponent_1.DomainTextInput label="User Name" labelColor='#000' labelBackground='#f0f0f0' name="username" nextName="password" placeholder="Username" value={username} onChangeText={setUsername} left={<FontAwesome_1.default name='user' size={20}/>}/>
                    </react_native_1.View>

                    <react_native_1.View style={{ marginVertical: 10 }}>
                        <domaincomponent_1.DomainTextInput name="password" nextName='gmail' label="Password" labelBackground='#f0f0f0' placeholder="Password" value={password} onChangeText={setPassword} focusColor="#7174F8" secureTextEntry={secure} helperText={passwordError} right={<react_native_1.Button title={secure ? "show" : "hide"} onPress={() => setSecure(!secure)}/>} rightWidth={'30%'}/>
                    </react_native_1.View>

                    <react_native_1.View style={{ marginVertical: 10 }}>
                        <domaincomponent_1.DomainTextInput name="gmail" label="Gmail" labelBackground='#f0f0f0' placeholder="Gmail" value={gmail} onChangeText={setGmail} focusColor="#7174F8" secureTextEntry={secure} right={<react_native_1.Text>@gmail.com</react_native_1.Text>} rightWidth={'30%'}/>
                    </react_native_1.View>

                </react_native_1.View>
            </react_native_1.View>
        </domaincomponent_1.DomainMainContainer>);
};
exports.default = DomainTextInputExample;
