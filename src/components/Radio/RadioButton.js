"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = require("../../objects/style");
const RadioButton = ({ selected, onSelect, size = 24, color = "#6200EE", }) => {
    return (<react_native_1.TouchableOpacity onPress={onSelect} style={{ padding: 5 }}>
            <react_native_1.View style={[style_1.RadioButtonCSS.radio, { width: size, height: size, borderColor: color }]}>
                {selected && <react_native_1.View style={[style_1.RadioButtonCSS.radioInner, { backgroundColor: color, width: size / 2, height: size / 2 }]}/>}
            </react_native_1.View>
        </react_native_1.TouchableOpacity>);
};
exports.default = RadioButton;
