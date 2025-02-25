import { TextInput, View, Text } from 'react-native';
import type { StyleProp, ViewStyle, TextInputProps, DimensionValue } from 'react-native';
import { TextInputCSS } from "../../objects/style";
import { useState, forwardRef, useRef, useEffect, useImperativeHandle } from 'react';
import type { ReactNode } from "react";
interface DomainTextInputProps extends Omit<TextInputProps, 'style'> {
  style?: StyleProp<ViewStyle>;
  width?: number;
  editable?: boolean;
  focusColor?: string;
  name: string;
  nextName?: string;
  left?: ReactNode;
  leftWidth?: DimensionValue;
  right?: ReactNode;
  rightWidth?: DimensionValue;
  helperText?: string;
  helperTextColor?: string;
  label?: string;
  labelColor?: string;
}

const refsMap = new Map<string, React.RefObject<TextInput>>();

const DomainTextInput = forwardRef<TextInput, DomainTextInputProps>(({
  width,
  style,
  editable = true,
  focusColor = "#007AFF",
  name,
  nextName,
  left,
  leftWidth,
  right,
  rightWidth,
  helperText,
  label,
  helperTextColor = "red",
  ...restProps
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => inputRef.current as TextInput, []);

  useEffect(() => {
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

  return (
    <View style={{ width: '100%' }}>
      {label && <View style={[TextInputCSS.labelView]}><Text style={[TextInputCSS.label, { color: isFocused ? focusColor : "#000" }]}>{label}</Text></View>}
      <View style={[
        TextInputCSS.container,
        {
          width: width ?? "100%",
          borderColor: editable ? (isFocused ? focusColor : "#000") : "#BBBBBB",
        },
        style
      ]}>
        {left && <View style={{ width: leftWidth ?? "10%" }}>{left}</View>}
        <TextInput
          {...restProps}
          ref={inputRef}
          style={TextInputCSS.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmitEditing={nextName ? handleSubmitEditing : undefined}
          returnKeyType={nextName ? "next" : "done"}
          enterKeyHint={nextName ? "next" : "done"}
          editable={editable}
        />
        {right && <View style={{ width: rightWidth ?? "10%" }}>{right}</View>}
      </View>
      {helperText && <Text style={[{ color: helperTextColor }, TextInputCSS.helperText]}>{helperText}</Text>}
    </View>
  );
});

export default DomainTextInput;
