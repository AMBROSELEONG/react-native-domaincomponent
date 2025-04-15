"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domaincomponent_1 = require("domaincomponent");
const react_1 = require("react");
const react_native_1 = require("react-native");
const DomainSliderExample = () => {
    const [sliderValue, setSliderValue] = (0, react_1.useState)(0);
    return (<react_native_1.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <domaincomponent_1.DomainSlider min={0} max={200} step={4} onValueChange={setSliderValue} color="#ff0000"/>
            <react_native_1.Text>{sliderValue}</react_native_1.Text>
        </react_native_1.View>);
};
exports.default = DomainSliderExample;
