"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
const style_1 = require("../../objects/style");
const DomainCheckbox = ({ checked, onChange, size = 24, color = "#6200EE" }) => {
    return (<react_native_1.TouchableOpacity onPress={() => onChange(!checked)} style={[style_1.CheckboxCSS.container, { width: size, height: size, borderColor: color }]}>
            {checked && <MaterialIcons_1.default name="check" size={size * 0.8} color={color}/>}
        </react_native_1.TouchableOpacity>);
};
exports.default = DomainCheckbox;
