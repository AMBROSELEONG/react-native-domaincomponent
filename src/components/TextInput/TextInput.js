"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const style_1 = require("../../objects/style");
const react_1 = require("react");
const refsMap = new Map();
const DomainTextInput = (0, react_1.forwardRef)(({ width, style, editable = true, focusColor = '#007AFF', name, nextName, left, leftWidth, right, rightWidth, helperText, label, labelColor = '#000', labelBackground = '#fff', helperTextColor = 'red', inputColor, ...restProps }, ref) => {
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const inputRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, () => inputRef.current, []);
    (0, react_1.useEffect)(() => {
        if (name) {
            refsMap.set(name, inputRef);
            return () => {
                refsMap.delete(name);
            };
        }
        return () => { };
    }, [name]);
    const handleSubmitEditing = () => {
        if (nextName && refsMap.has(nextName)) {
            refsMap.get(nextName)?.current?.focus();
        }
    };
    return (<react_native_1.View style={{ width: '100%' }}>
        {label && (<react_native_1.View style={[style_1.TextInputCSS.labelView, { backgroundColor: labelBackground }]}>
            <react_native_1.Text style={[
                style_1.TextInputCSS.label,
                { color: isFocused ? focusColor : labelColor },
            ]}>
              {label}
            </react_native_1.Text>
          </react_native_1.View>)}
        <react_native_1.View style={[
            style_1.TextInputCSS.container,
            {
                width: width ?? '100%',
                borderColor: editable
                    ? isFocused
                        ? focusColor
                        : '#000'
                    : '#BBBBBB',
            },
            style,
        ]}>
          {left && <react_native_1.View style={{ width: leftWidth ?? '10%' }}>{left}</react_native_1.View>}
          <react_native_1.TextInput {...restProps} ref={inputRef} style={[
            style_1.TextInputCSS.input,
            { color: inputColor ? inputColor : '#000' },
        ]} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onSubmitEditing={nextName ? handleSubmitEditing : undefined} returnKeyType={nextName ? 'next' : 'done'} enterKeyHint={nextName ? 'next' : 'done'} editable={editable}/>
          {right && <react_native_1.View style={{ width: rightWidth ?? '10%' }}>{right}</react_native_1.View>}
        </react_native_1.View>
        {helperText && (<react_native_1.Text style={[{ color: helperTextColor }, style_1.TextInputCSS.helperText]}>
            {helperText}
          </react_native_1.Text>)}
      </react_native_1.View>);
});
exports.default = DomainTextInput;
