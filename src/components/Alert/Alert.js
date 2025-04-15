"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAlert = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const style_1 = require("../../objects/style");
const FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
const iconMap = {
    success: "check-circle",
    failed: "times-circle",
    warning: "exclamation-circle",
};
const backgroundColorMap = {
    success: "rgba(76, 175, 80, 0.50)",
    failed: "rgba(244, 67, 54, 0.50)",
    warning: "rgba(255, 193, 7, 0.50)",
};
const borderColorMap = {
    success: "#4CAF50",
    failed: "#F44336",
    warning: "#FFC107",
};
let showAlertFn = null;
const DomainAlertContainer = () => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    const [slideAnim] = (0, react_1.useState)(new react_native_1.Animated.Value(-50));
    const [alertData, setAlertData] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        showAlertFn = ({ title, type = "warning", duration = 3000 }) => {
            setAlertData({ title, type });
            setVisible(true);
            react_native_1.Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
            setTimeout(() => {
                react_native_1.Animated.timing(slideAnim, {
                    toValue: -50,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => setVisible(false));
            }, duration);
        };
    }, [slideAnim]);
    if (!visible || !alertData)
        return null;
    return (<react_native_1.Animated.View style={[
            style_1.AlertCSS.container,
            {
                transform: [{ translateY: slideAnim }],
                backgroundColor: backgroundColorMap[alertData.type],
                borderColor: borderColorMap[alertData.type],
            }
        ]}>
            <react_native_1.View style={style_1.AlertCSS.content}>
                <FontAwesome_1.default name={iconMap[alertData.type] ?? "exclamation-circle"} size={20} style={style_1.AlertCSS.icon}/>
                <react_native_1.Text style={style_1.AlertCSS.text}>{alertData.title}</react_native_1.Text>
            </react_native_1.View>
        </react_native_1.Animated.View>);
};
const showAlert = (options) => {
    if (showAlertFn) {
        showAlertFn(options);
    }
};
exports.showAlert = showAlert;
exports.default = DomainAlertContainer;
