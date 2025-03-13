import React from 'react';
import {
    Modal,
} from 'react-native';
import type { DomainModalProps } from './ModalProps';

const DomainModal: React.FC<DomainModalProps> = ({
    openModal = false,
    onClose,
    onOpen,
    animationType = 'slide',
    transparent = true,
    position = 'center',
    modalHeight = 'auto',
    modalWidth = '80%',
    backdropOpacity = 0.5,
    closeOnHardwareBackPress = true,
    disableBackdropPress = false,
    showCloseIcon = true,
    closeButton = true,
    keyboardAvoiding = false,
    title,
    header,
    footer,
    children,
    style,
    backdropStyle,
    contentStyle,
    titleStyle,
    ...modalProps
}) => {

    React.useEffect(() => {
        if (openModal && onOpen) {
            onOpen();
        }
    }, [openModal, onOpen]);

    return (
        <Modal
            visible={openModal}
            animationType={animationType}
            transparent={transparent}
            onRequestClose={() => {
                if (closeOnHardwareBackPress && onClose) {
                    onClose();
                }
            }}
            {...modalProps}
        >
        </Modal>
    )
}

export default DomainModal;