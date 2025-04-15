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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const style_1 = require("../../objects/style");
const TextInput_1 = __importDefault(require("../TextInput/TextInput"));
const DomainMultipleSelect = ({ label, labelColor, labelBackground = "#fff", style, options, value = [], onChange, placeholder, resetButton = false, search = true, helperText, helperTextColor = "red", maxSelection, minSelection = 1, }) => {
    const [modalVisible, setModalVisible] = (0, react_1.useState)(false);
    const [searchQuery, setSearchQuery] = (0, react_1.useState)("");
    const toggleSelect = (id) => {
        let newValue = [...value];
        if (newValue.includes(id)) {
            if (newValue.length > minSelection) {
                newValue = newValue.filter((v) => v !== id);
            }
        }
        else {
            if (!maxSelection || newValue.length < maxSelection) {
                newValue.push(id);
            }
        }
        setSearchQuery("");
        onChange?.(newValue);
    };
    const handleReset = () => {
        onChange?.([]);
    };
    const filteredOptions = options.filter((opt) => opt.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return (<react_native_1.View>
            <react_native_1.View style={[style_1.MultipleSelectCSS.container, style]}>
                {label && (<react_native_1.View style={[
                style_1.MultipleSelectCSS.labelView,
                { backgroundColor: labelBackground },
            ]}>
                        <react_native_1.Text style={[style_1.MultipleSelectCSS.label, { color: labelColor }]}>
                            {label}
                        </react_native_1.Text>
                    </react_native_1.View>)}

                <react_native_1.TouchableOpacity style={style_1.MultipleSelectCSS.selector} onPress={() => setModalVisible(true)}>
                    <react_native_1.Text style={style_1.MultipleSelectCSS.selectedText}>
                        {value.length > 0
            ? options
                .filter((opt) => value.includes(opt.id))
                .map((opt) => opt.name)
                .join(", ")
            : placeholder}
                    </react_native_1.Text>
                </react_native_1.TouchableOpacity>

                {resetButton && value.length > 0 && (<react_native_1.TouchableOpacity style={style_1.MultipleSelectCSS.resetButton} onPress={handleReset}>
                        <react_native_1.Text style={style_1.MultipleSelectCSS.resetButtonText}>X</react_native_1.Text>
                    </react_native_1.TouchableOpacity>)}
            </react_native_1.View>

            <react_native_1.Modal visible={modalVisible} transparent animationType="slide" onRequestClose={() => setModalVisible(false)}>
                <react_native_1.View style={style_1.MultipleSelectCSS.modalContainer}>
                    <react_native_1.View style={style_1.MultipleSelectCSS.modalContent}>
                        {label && <react_native_1.Text style={style_1.MultipleSelectCSS.title}>{label}</react_native_1.Text>}
                        {search &&
            <react_native_1.View style={style_1.MultipleSelectCSS.searchContainer}>
                                <TextInput_1.default name='Search' placeholder='Search' value={searchQuery} onChangeText={setSearchQuery} style={style_1.MultipleSelectCSS.searchInput}/>
                            </react_native_1.View>}
                        <react_native_1.FlatList data={filteredOptions} keyExtractor={(item) => item.id} renderItem={({ item }) => (<react_native_1.TouchableOpacity style={style_1.MultipleSelectCSS.option} onPress={() => toggleSelect(item.id)}>
                                    {item.left && (<react_native_1.View style={[style_1.MultipleSelectCSS.sideContainer, { marginRight: 20 }]}>
                                            {item.left}
                                        </react_native_1.View>)}

                                    <react_native_1.Text style={style_1.MultipleSelectCSS.optionText}>{item.name}</react_native_1.Text>

                                    {item.right && (<react_native_1.View style={[style_1.MultipleSelectCSS.sideContainer, { marginLeft: 20 }]}>
                                            {item.right}
                                        </react_native_1.View>)}
                                </react_native_1.TouchableOpacity>)}/>

                        <react_native_1.TouchableOpacity style={style_1.MultipleSelectCSS.closeButton} onPress={() => setModalVisible(false)}>
                            <react_native_1.Text style={style_1.MultipleSelectCSS.closeButtonText}>Close</react_native_1.Text>
                        </react_native_1.TouchableOpacity>
                    </react_native_1.View>
                </react_native_1.View>
            </react_native_1.Modal>

            {helperText && (<react_native_1.Text style={[{ color: helperTextColor }, style_1.MultipleSelectCSS.helperText]}>
                    {helperText}
                </react_native_1.Text>)}
        </react_native_1.View>);
};
exports.default = DomainMultipleSelect;
