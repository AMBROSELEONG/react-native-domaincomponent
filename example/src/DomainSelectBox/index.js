"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const domaincomponent_1 = require("domaincomponent");
const react_1 = require("react");
const FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
const DomainSelectExample = () => {
    const [phone, setPhone] = (0, react_1.useState)('');
    const [selectedValue, setSelectedValue] = (0, react_1.useState)(undefined);
    const countryOptions = [
        {
            id: '1',
            name: 'Malaysia',
            left: <react_native_1.Text>MS</react_native_1.Text>,
            right: <FontAwesome_1.default name='flag' size={15}/>
        },
        {
            id: '2',
            name: 'Malaysia',
            left: <react_native_1.Text>MS</react_native_1.Text>,
            right: <FontAwesome_1.default name='flag' size={15}/>
        },
        {
            id: '3',
            name: 'Malaysia',
            left: <react_native_1.Text>MS</react_native_1.Text>,
            right: <FontAwesome_1.default name='flag' size={15}/>
        },
        {
            id: '4',
            name: 'Malaysia',
            left: <react_native_1.Text>MS</react_native_1.Text>,
            right: <FontAwesome_1.default name='flag' size={15}/>
        }
    ];
    const [selectedPhoneValue, setSelectedPhoneValue] = (0, react_1.useState)(undefined);
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
    return (<domaincomponent_1.DomainMainContainer>
            <react_native_1.Text>Country: {selectedValue}</react_native_1.Text>
            <react_native_1.Text>Phone: {selectedPhoneValue} {phone}</react_native_1.Text>
            <react_native_1.View style={{ alignItems: 'center' }}>
                <react_native_1.View style={{ width: '80%', }}>

                    <react_native_1.View style={{ marginVertical: 10 }}>
                        <domaincomponent_1.DomainSelect options={countryOptions} value={selectedValue} onChange={setSelectedValue} placeholder="Select a country" label="Country" resetButton={true} helperText='Cannot empty' labelBackground='#f0f0f0'/>
                    </react_native_1.View>

                    <react_native_1.View style={{ marginVertical: 10 }}>
                        <domaincomponent_1.DomainTextInput label="Phone Number" name="phone" placeholder="phone" leftWidth={50} keyboardType="phone-pad" value={phone} onChangeText={setPhone} dataDetectorTypes='phoneNumber' labelBackground='#f0f0f0' left={<domaincomponent_1.DomainSelect options={phoneOptions} value={selectedPhoneValue} onChange={setSelectedPhoneValue} placeholder="+" style={{ borderWidth: 0 }}/>}/>
                    </react_native_1.View>
                </react_native_1.View>
            </react_native_1.View>
        </domaincomponent_1.DomainMainContainer>);
};
exports.default = DomainSelectExample;
