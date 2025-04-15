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
const DomainSelect = ({ label, labelColor, labelBackground = "#fff", style, options, value, onChange, placeholder, resetButton = false, search = true, helperText, helperTextColor = 'red', }) => {
    const [modalVisible, setModalVisible] = (0, react_1.useState)(false);
    const [searchQuery, setSearchQuery] = (0, react_1.useState)("");
    const handleSelect = (id) => {
        onChange?.(id);
        setModalVisible(false);
        setSearchQuery('');
    };
    const handleReset = () => {
        onChange?.(undefined);
    };
    const filteredOptions = options.filter((opt) => opt.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const selectedOption = options.find((opt) => opt.id === value);
    return (<react_native_1.View>
      <react_native_1.View style={[style_1.SelectCSS.container, style]}>
        {label && (<react_native_1.View style={[style_1.SelectCSS.labelView, { backgroundColor: labelBackground }]}>
            <react_native_1.Text style={[style_1.SelectCSS.label, { color: labelColor }]}>{label}</react_native_1.Text>
          </react_native_1.View>)}

        <react_native_1.View style={style_1.SelectCSS.selectWrapper}>
          <react_native_1.TouchableOpacity style={style_1.SelectCSS.selector} onPress={() => setModalVisible(true)}>
            {selectedOption ? (<react_native_1.View style={style_1.SelectCSS.selectedContainer}>
                {selectedOption.left && (<react_native_1.View style={[style_1.SelectCSS.sideContainer, { marginRight: 20 }]}>
                    {selectedOption.left}
                  </react_native_1.View>)}
                <react_native_1.Text style={style_1.SelectCSS.selectedText}>{selectedOption.name}</react_native_1.Text>
                {selectedOption.right && (<react_native_1.View style={[style_1.SelectCSS.sideContainer, { marginLeft: 20 }]}>
                    {selectedOption.right}
                  </react_native_1.View>)}
              </react_native_1.View>) : (<react_native_1.Text style={style_1.SelectCSS.selectedText}>{placeholder}</react_native_1.Text>)}
          </react_native_1.TouchableOpacity>
          {resetButton && value && (<react_native_1.TouchableOpacity style={style_1.SelectCSS.resetButton} onPress={handleReset}>
              <react_native_1.Text style={style_1.SelectCSS.resetButtonText}>X</react_native_1.Text>
            </react_native_1.TouchableOpacity>)}
        </react_native_1.View>

        <react_native_1.Modal visible={modalVisible} transparent animationType="slide">
          <react_native_1.View style={style_1.SelectCSS.modalContainer}>
            <react_native_1.View style={style_1.SelectCSS.modalContent}>
              {label && <react_native_1.Text style={style_1.SelectCSS.title}>{label}</react_native_1.Text>}
              {search &&
            <react_native_1.View style={style_1.SelectCSS.searchContainer}>
                  <TextInput_1.default name='Search' placeholder='Search' value={searchQuery} onChangeText={setSearchQuery} style={style_1.SelectCSS.searchInput}/>
                </react_native_1.View>}
              <react_native_1.FlatList data={filteredOptions} keyExtractor={(item) => item.id} scrollEnabled showsVerticalScrollIndicator={false} renderItem={({ item }) => (<react_native_1.TouchableOpacity style={style_1.SelectCSS.option} onPress={() => handleSelect(item.id)}>
                    {item.left && (<react_native_1.View style={[style_1.SelectCSS.sideContainer, { marginRight: 20 }]}>
                        {item.left}
                      </react_native_1.View>)}

                    <react_native_1.Text style={style_1.SelectCSS.optionText}>{item.name}</react_native_1.Text>

                    {item.right && (<react_native_1.View style={[style_1.SelectCSS.sideContainer, { marginLeft: 20 }]}>
                        {item.right}
                      </react_native_1.View>)}
                  </react_native_1.TouchableOpacity>)}/>
              <react_native_1.TouchableOpacity style={style_1.SelectCSS.closeButton} onPress={() => setModalVisible(false)}>
                <react_native_1.Text style={style_1.SelectCSS.closeButtonText}>Close</react_native_1.Text>
              </react_native_1.TouchableOpacity>
            </react_native_1.View>
          </react_native_1.View>
        </react_native_1.Modal>

      </react_native_1.View>
      {helperText && (<react_native_1.Text style={[{ color: helperTextColor }, style_1.SelectCSS.helperText]}>
            {helperText}
          </react_native_1.Text>)}
    </react_native_1.View>);
};
exports.default = DomainSelect;
