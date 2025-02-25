import { TextInput } from 'react-native';
import type { StyleProp, ViewStyle, TextInputProps } from 'react-native';
import { TextInputCSS } from "../../objects/style";

interface DomainTextInputProps extends Omit<TextInputProps, 'style'> {
  style?: StyleProp<ViewStyle>;
  width?: number;
  editable?: boolean;
}

export function DomainTextInput({ width, style, editable = true, ...restProps }: DomainTextInputProps) {
  return (
    <TextInput
      {...restProps}
      editable={editable}
      style={[
        TextInputCSS.container,
        { width: width ?? "100%", borderColor: editable == true ? "#000" : "#BBBBBB", color: editable == true ? "#000" : "#BBBBBB" },
        style,
      ]}
    />
  );
}