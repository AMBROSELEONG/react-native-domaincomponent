"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
const style_1 = require("../../objects/style");
const DomainHeader = ({ navigation, title, rightComponent, backgroundColor = '#000', color = '#fff', }) => {
    return (<react_native_1.SafeAreaView style={{ backgroundColor }}>
            <react_native_1.StatusBar barStyle="light-content" backgroundColor={backgroundColor}/>
            <react_native_1.View style={style_1.HeaderCSS.mainContainer}>
                <react_native_1.TouchableOpacity style={style_1.HeaderCSS.headerIcon} onPress={navigation}>
                    <Ionicons_1.default name="arrow-back" size={26} color={color}/>
                </react_native_1.TouchableOpacity>
                <react_native_1.Text style={[style_1.HeaderCSS.pageName, { color }]}>{title}</react_native_1.Text>
                <react_native_1.View style={style_1.HeaderCSS.headerIcon}>
                    {rightComponent ? rightComponent : null}
                </react_native_1.View>
            </react_native_1.View>
        </react_native_1.SafeAreaView>);
};
exports.default = DomainHeader;
