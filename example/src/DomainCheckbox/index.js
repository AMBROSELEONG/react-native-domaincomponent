"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domaincomponent_1 = require("domaincomponent");
const react_native_1 = require("react-native");
const react_1 = require("react");
const DomainCheckboxExample = () => {
    const [isChecked, setIsChecked] = (0, react_1.useState)(false);
    const [isChecked1, setIsChecked1] = (0, react_1.useState)(false);
    const [isChecked2, setIsChecked2] = (0, react_1.useState)(false);
    return (<react_native_1.View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <react_native_1.View style={{ flexDirection: "row", alignItems: 'center' }}>
                <domaincomponent_1.DomainCheckbox checked={isChecked} onChange={setIsChecked} color="black" size={20}/>
                <react_native_1.Text>Option 1</react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View style={{ flexDirection: "row", alignItems: 'center' }}>
                <domaincomponent_1.DomainCheckbox checked={isChecked1} onChange={setIsChecked1} color="black" size={20}/>
                <react_native_1.Text>Option 2</react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View style={{ flexDirection: "row", alignItems: 'center' }}>
                <domaincomponent_1.DomainCheckbox checked={isChecked2} onChange={setIsChecked2} color="black" size={20}/>
                <react_native_1.Text>Option 3</react_native_1.Text>
            </react_native_1.View>
            <react_native_1.Text>{isChecked ? "Selected" : "Not Selected"}</react_native_1.Text>
            <react_native_1.Text>{isChecked1 ? "Selected" : "Not Selected"}</react_native_1.Text>
            <react_native_1.Text>{isChecked2 ? "Selected" : "Not Selected"}</react_native_1.Text>
        </react_native_1.View>);
};
exports.default = DomainCheckboxExample;
