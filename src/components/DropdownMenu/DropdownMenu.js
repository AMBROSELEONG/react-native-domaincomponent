"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = require("../../objects/style");
const react_1 = require("react");
const react_native_1 = require("react-native");
const DomainDropdownMenu = ({ options, style, children, optionsRender, dropdownStyle, }) => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    const closeMenu = () => {
        setVisible(false);
    };
    return (<react_native_1.View>
            <react_native_1.TouchableOpacity style={[style_1.DropdownMenuCSS.button, style]} onPress={() => setVisible(!visible)}>
                {children}
            </react_native_1.TouchableOpacity>

            {visible && (<react_native_1.TouchableWithoutFeedback onPress={closeMenu}>
                    <react_native_1.View style={[style_1.DropdownMenuCSS.dropdown, dropdownStyle]}>
                        <react_native_1.FlatList data={options} keyExtractor={(index) => index.toString()} showsVerticalScrollIndicator={false} renderItem={optionsRender && typeof optionsRender === 'function'
                ? optionsRender
                : undefined}/>
                    </react_native_1.View>
                </react_native_1.TouchableWithoutFeedback>)}
        </react_native_1.View>);
};
exports.default = DomainDropdownMenu;
