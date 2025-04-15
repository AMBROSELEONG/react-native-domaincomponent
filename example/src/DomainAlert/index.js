"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domaincomponent_1 = require("domaincomponent");
const react_native_1 = require("react-native");
const DomainAlertExample = () => {
    const success = () => {
        (0, domaincomponent_1.showAlert)({ title: "Operation Successful!", type: 'success' });
    };
    const failed = () => {
        (0, domaincomponent_1.showAlert)({ title: "Operation Failed!", type: 'failed' });
    };
    const warning = () => {
        (0, domaincomponent_1.showAlert)({ title: "Operation Warning!", type: 'warning' });
    };
    return (<domaincomponent_1.DomainMainContainer>
            <react_native_1.StatusBar />
            <domaincomponent_1.DomainAlert />
            <react_native_1.Button title="Success" onPress={() => success()}/>
            <react_native_1.Button title="Failed" onPress={() => failed()}/>
            <react_native_1.Button title="Warning" onPress={() => warning()}/>
        </domaincomponent_1.DomainMainContainer>);
};
exports.default = DomainAlertExample;
