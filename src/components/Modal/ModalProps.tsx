import type { ModalProps, StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface DomainModalProps extends ModalProps {
    openModal?: boolean; 
    onClose?: () => void;
    onOpen?: () => void;  
    closeButton?: boolean; 
    disableBackdropPress?: boolean; 
    closeOnHardwareBackPress?: boolean;
    
    style?: StyleProp<ViewStyle>;
    backdropStyle?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;

    modalHeight?: number | string;
    modalWidth?: number | string;
    position?: 'center' | 'top' | 'bottom';
    backdropOpacity?: number;

    title: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    showCloseIcon?: boolean;

    keyboardAvoiding?: boolean;

    children: React.ReactNode;
}
