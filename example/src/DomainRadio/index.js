"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domaincomponent_1 = require("domaincomponent");
const react_1 = require("react");
const react_native_1 = require("react-native");
const DomainRadioExample = () => {
    const [selectedIndex, setSelectedIndex] = (0, react_1.useState)(0);
    const options = ["Male", "Female", "Other"];
    return (<react_native_1.View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <domaincomponent_1.DomainRadioGroup options={options} selectedIndex={selectedIndex} onSelect={setSelectedIndex} color="black" size={20} labelStyle={{ fontSize: 18 }}/>
            <react_native_1.Text>Selected: {options[selectedIndex]}</react_native_1.Text>
        </react_native_1.View>);
};
exports.default = DomainRadioExample;
