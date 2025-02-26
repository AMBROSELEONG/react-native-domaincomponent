import type { StyleProp, ViewStyle, SwitchProps, SwitchPropsIOS } from 'react-native';
import type { ReactNode } from "react";

export interface DomainSwitchButtonProps extends SwitchProps, SwitchPropsIOS {
    style? : StyleProp<ViewStyle>;
}