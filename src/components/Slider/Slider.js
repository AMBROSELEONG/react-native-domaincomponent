"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const style_1 = require("../../objects/style");
const DomainSlider = ({ min = 0, max = 100, step = 1, onValueChange, color = "blue" }) => {
    const [value, setValue] = (0, react_1.useState)(min);
    const [position, setPosition] = (0, react_1.useState)(0);
    const sliderWidth = 300;
    const panResponder = react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            let newPos = Math.min(sliderWidth, Math.max(0, gestureState.dx + position));
            let newValue = Math.round((newPos / sliderWidth) * (max - min) / step) * step + min;
            setPosition(newPos);
            setValue(newValue);
            if (onValueChange)
                onValueChange(newValue);
        },
    });
    return (<react_native_1.View style={style_1.SliderCSS.container}>
            <react_native_1.Text>Value: {value}</react_native_1.Text>
            <react_native_1.View style={style_1.SliderCSS.track}>
                <react_native_1.View style={[style_1.SliderCSS.thumb, { left: position, backgroundColor: color }]} {...panResponder.panHandlers}/>
            </react_native_1.View>
        </react_native_1.View>);
};
exports.default = DomainSlider;
