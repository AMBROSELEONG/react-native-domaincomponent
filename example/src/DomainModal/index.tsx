import { DomainMainContainer, DomainModal } from "domaincomponent";
import { useState } from "react";
import { View, Button, Text } from "react-native";
const DomainModalExample = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <DomainMainContainer>
            <Button title="Open Modal" onPress={() => setOpenModal(true)} />
            <DomainModal title="Domain Modal"
                openModal={openModal}
                onClose={() => setOpenModal(false)}
                showCloseIcon={true}
                disableBackdropPress={true}
                animationType='fade'
                modalWidth={'90%'}>
                <View><Text>Hello World</Text></View>
            </DomainModal>
        </DomainMainContainer>
    )
}

export default DomainModalExample;