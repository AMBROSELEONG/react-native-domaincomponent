"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = require("../../objects/style");
const DomainLoading = ({ loading }) => {
    if (!loading)
        return null;
    return (<react_native_1.View style={style_1.ActivityIndicatorCSS.container}>
      <react_native_1.ActivityIndicator size="large" color="#000000"/>
    </react_native_1.View>);
};
exports.default = DomainLoading;
