"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainMultipleSelect = exports.showAlert = exports.DomainAlert = exports.DomainHeader = exports.DomainDropdownMenu = exports.DomainHelperText = exports.DomainSlider = exports.DomainRadioGroup = exports.DomainCheckbox = exports.DomainModal = exports.DomainMainContainer = exports.DomainSelect = exports.DomainSwitchButton = exports.DomainLoading = exports.DomainTextInput = exports.myFunction = void 0;
const react_native_1 = require("react-native");
const myFunction = () => {
    if (react_native_1.Platform.OS === 'web') {
        return 'Running in Web';
    }
    else if (react_native_1.Platform.OS === 'ios' || react_native_1.Platform.OS === 'android') {
        return 'Running in Mobile';
    }
    else {
        return 'Unknown Platform';
    }
};
exports.myFunction = myFunction;
var TextInput_1 = require("./components/TextInput/TextInput");
Object.defineProperty(exports, "DomainTextInput", { enumerable: true, get: function () { return __importDefault(TextInput_1).default; } });
var ActivityIndicator_1 = require("./components/ActivityIndicator/ActivityIndicator");
Object.defineProperty(exports, "DomainLoading", { enumerable: true, get: function () { return __importDefault(ActivityIndicator_1).default; } });
var SwitchButton_1 = require("./components/SwitchButton/SwitchButton");
Object.defineProperty(exports, "DomainSwitchButton", { enumerable: true, get: function () { return __importDefault(SwitchButton_1).default; } });
var Select_1 = require("./components/Select/Select");
Object.defineProperty(exports, "DomainSelect", { enumerable: true, get: function () { return __importDefault(Select_1).default; } });
var MainContainer_1 = require("./components/MainContainer/MainContainer");
Object.defineProperty(exports, "DomainMainContainer", { enumerable: true, get: function () { return __importDefault(MainContainer_1).default; } });
var Modal_1 = require("./components/Modal/Modal");
Object.defineProperty(exports, "DomainModal", { enumerable: true, get: function () { return __importDefault(Modal_1).default; } });
var Checkbox_1 = require("./components/Checkbox/Checkbox");
Object.defineProperty(exports, "DomainCheckbox", { enumerable: true, get: function () { return __importDefault(Checkbox_1).default; } });
var RadioGroup_1 = require("./components/Radio/RadioGroup");
Object.defineProperty(exports, "DomainRadioGroup", { enumerable: true, get: function () { return __importDefault(RadioGroup_1).default; } });
var Slider_1 = require("./components/Slider/Slider");
Object.defineProperty(exports, "DomainSlider", { enumerable: true, get: function () { return __importDefault(Slider_1).default; } });
var HelperText_1 = require("./components/HelperText/HelperText");
Object.defineProperty(exports, "DomainHelperText", { enumerable: true, get: function () { return __importDefault(HelperText_1).default; } });
var DropdownMenu_1 = require("./components/DropdownMenu/DropdownMenu");
Object.defineProperty(exports, "DomainDropdownMenu", { enumerable: true, get: function () { return __importDefault(DropdownMenu_1).default; } });
var Header_1 = require("./components/Header/Header");
Object.defineProperty(exports, "DomainHeader", { enumerable: true, get: function () { return __importDefault(Header_1).default; } });
var Alert_js_1 = require("./components/Alert/Alert.js");
Object.defineProperty(exports, "DomainAlert", { enumerable: true, get: function () { return __importDefault(Alert_js_1).default; } });
Object.defineProperty(exports, "showAlert", { enumerable: true, get: function () { return Alert_js_1.showAlert; } });
var MultipleSelect_1 = require("./components/MultiSelect/MultipleSelect");
Object.defineProperty(exports, "DomainMultipleSelect", { enumerable: true, get: function () { return __importDefault(MultipleSelect_1).default; } });
