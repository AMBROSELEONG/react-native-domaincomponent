"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const domaincomponent_1 = require("domaincomponent");
const DomainHelperTextExample = () => {
    const [input, setInput] = (0, react_1.useState)('');
    const [showError, setShowError] = (0, react_1.useState)(false);
    const handleValidation = () => {
        setShowError(input.trim() === '');
    };
    return (<react_native_1.View style={{ padding: 20 }}>
            <domaincomponent_1.DomainTextInput name='Text' placeholder="Enter text" value={input} onChangeText={setInput} style={{ borderWidth: 1, padding: 10, borderRadius: 5 }}/>
            <domaincomponent_1.DomainHelperText text="This field is required!" visible={showError} color="red"/>
            <react_native_1.Button title="Validate" onPress={handleValidation}/>
        </react_native_1.View>);
};
exports.default = DomainHelperTextExample;
