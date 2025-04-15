"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = require("../../objects/style");
const DomainModal = ({ openModal = false, onClose, onOpen, animationType = 'slide', transparent = true, modalHeight, modalWidth, backdropOpacity = 0.5, closeOnHardwareBackPress = true, disableBackdropPress = false, showCloseIcon = true, keyboardAvoiding = false, title, header, footer, children, style, backdropStyle, contentStyle, titleStyle, ...modalProps }) => {
    react_1.default.useEffect(() => {
        if (openModal && onOpen) {
            onOpen();
        }
    }, [openModal, onOpen]);
    return (<react_native_1.Modal visible={openModal} animationType={animationType} transparent={transparent} onRequestClose={() => {
            if (closeOnHardwareBackPress && onClose) {
                onClose();
            }
        }} {...modalProps}>
            <react_native_1.TouchableWithoutFeedback onPress={() => {
            if (!disableBackdropPress && onClose) {
                onClose();
            }
        }}>
                <react_native_1.View style={[style_1.ModalCSS.backdrop, { backgroundColor: `rgba(0,0,0,${backdropOpacity})` }, backdropStyle]}>
                    <react_native_1.View style={[style_1.ModalCSS.modalContainer, style, { width: modalWidth ?? '80%', height: modalHeight }]}>
                        {showCloseIcon && (<react_native_1.TouchableOpacity style={style_1.ModalCSS.closeButton} onPress={onClose}>
                                <react_native_1.Text style={style_1.ModalCSS.closeText}>×</react_native_1.Text>
                            </react_native_1.TouchableOpacity>)}
                        {title && <react_native_1.Text style={[style_1.ModalCSS.title, titleStyle]}>{title}</react_native_1.Text>}
                        {header}
                        <react_native_1.View style={[style_1.ModalCSS.content, contentStyle]}>
                            {children}
                        </react_native_1.View>
                        {footer}
                    </react_native_1.View>
                </react_native_1.View>
            </react_native_1.TouchableWithoutFeedback>
        </react_native_1.Modal>);
};
exports.default = DomainModal;
