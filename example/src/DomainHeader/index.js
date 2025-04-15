"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const domaincomponent_1 = require("domaincomponent");
const native_1 = require("@react-navigation/native");
const DomainHeaderExample = () => {
    const navigation = (0, native_1.useNavigation)();
    const headerRightComponent = () => {
        return (<react_native_1.TouchableOpacity>
                <react_native_1.Text style={{ color: '#fff', fontSize: 26 }}>+</react_native_1.Text>
            </react_native_1.TouchableOpacity>);
    };
    return (<react_native_1.View style={{ flex: 1 }}>
            <domaincomponent_1.DomainHeader navigation={() => navigation.goBack()} title="Header" rightComponent={headerRightComponent()} backgroundColor="#0000ff" color="white"/>
        </react_native_1.View>);
};
exports.default = DomainHeaderExample;
