"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const domaincomponent_1 = require("domaincomponent");
const react_1 = require("react");
const DomainDropdownMenuExample = () => {
    const options = ['Profile', 'Settings', 'Logout', 'Test', 'Exp'];
    const [, setVisible] = (0, react_1.useState)(false);
    const handleSelect = (item) => {
        setVisible(false);
        switch (item) {
            case 'Profile':
                console.log("Profile");
                break;
            case 'Settings':
                console.log("Settings");
                break;
            case 'Logout':
                console.log("Logout");
                break;
            default:
                console.log(`Selected: ${item}`);
        }
    };
    return (<react_native_1.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <domaincomponent_1.DomainDropdownMenu options={options} dropdownStyle={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }} optionsRender={({ item }) => (<react_native_1.TouchableOpacity style={{ padding: 10 }} onPress={() => handleSelect(item)}>
                        <react_native_1.Text style={{ fontSize: 16 }}>{item}</react_native_1.Text>
                    </react_native_1.TouchableOpacity>)}>
                <react_native_1.Text style={{ fontSize: 18, color: 'blue' }}>☰ Menu</react_native_1.Text>
            </domaincomponent_1.DomainDropdownMenu>
        </react_native_1.View>);
};
exports.default = DomainDropdownMenuExample;
