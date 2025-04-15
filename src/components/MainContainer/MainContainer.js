"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = require("../../objects/style");
const react_native_1 = require("react-native");
const DomainMainContainer = ({ children, keyboardAvoidingEnabled = false, }) => {
    return keyboardAvoidingEnabled ? (<react_native_1.KeyboardAvoidingView behavior={react_native_1.Platform.OS === 'ios' ? 'padding' : 'height'} style={style_1.MainContainer.container}>
      <react_native_1.SafeAreaView>{children}</react_native_1.SafeAreaView>
    </react_native_1.KeyboardAvoidingView>) : (<react_native_1.SafeAreaView style={style_1.MainContainer.container}>{children}</react_native_1.SafeAreaView>);
};
exports.default = DomainMainContainer;
