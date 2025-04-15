"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = require("../../objects/style");
const RadioButton_1 = __importDefault(require("./RadioButton"));
const react_native_1 = require("react-native");
const DomainRadioGroup = ({ options, selectedIndex, onSelect, size, color, labelStyle, style, }) => {
    return (<react_native_1.View style={[style]}>
            {options.map((option, index) => (<react_native_1.TouchableOpacity key={index} style={style_1.RadioButtonCSS.option} onPress={() => onSelect(index)}>
                    <RadioButton_1.default selected={index === selectedIndex} onSelect={() => onSelect(index)} size={size} color={color}/>
                    <react_native_1.Text style={[style_1.RadioButtonCSS.optionText, labelStyle]}>{option}</react_native_1.Text>
                </react_native_1.TouchableOpacity>))}
        </react_native_1.View>);
};
exports.default = DomainRadioGroup;
