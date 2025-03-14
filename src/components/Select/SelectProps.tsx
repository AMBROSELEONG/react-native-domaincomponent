import type { StyleProp, ViewStyle, ColorValue } from 'react-native';
import React from 'react';

export interface Option {
  id: string;
  name: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export interface DomainSelectProps {
  style?: StyleProp<ViewStyle>;
  search?: boolean;
  options: Option[];
  value?: string;
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
  label?: string;
  resetButton?: boolean;
  helperText?: string;
  helperTextColor?: ColorValue;
}
