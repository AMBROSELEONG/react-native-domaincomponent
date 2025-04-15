"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domaincomponent_1 = require("domaincomponent");
const react_1 = require("react");
const react_native_1 = require("react-native");
const DomainModalExample = () => {
    const [openModal, setOpenModal] = (0, react_1.useState)(false);
    return (<domaincomponent_1.DomainMainContainer>
            <react_native_1.Button title="Open Modal" onPress={() => setOpenModal(true)}/>
            <domaincomponent_1.DomainModal title="Domain Modal" openModal={openModal} onClose={() => setOpenModal(false)} showCloseIcon={true} disableBackdropPress={false} animationType='fade' modalWidth={'90%'} footer={<react_native_1.Button title="Close" onPress={() => setOpenModal(false)}></react_native_1.Button>}>
                <react_native_1.View>
                    <react_native_1.Text>Hello World</react_native_1.Text>
                </react_native_1.View>
            </domaincomponent_1.DomainModal>
        </domaincomponent_1.DomainMainContainer>);
};
exports.default = DomainModalExample;
