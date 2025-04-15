"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domaincomponent_1 = require("domaincomponent");
const react_native_1 = require("react-native");
const native_1 = require("@react-navigation/native");
const Home = () => {
    const navigation = (0, native_1.useNavigation)();
    return (<domaincomponent_1.DomainMainContainer>
            <react_native_1.View>
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainTextInput')}>
                    <react_native_1.Text style={style.text}>Domain TextInput</react_native_1.Text>
                </react_native_1.TouchableOpacity> 
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainSelect')}>
                    <react_native_1.Text style={style.text}>Domain Select</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainLoading')}>
                    <react_native_1.Text style={style.text}>Domain Loading</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainModal')}>
                    <react_native_1.Text style={style.text}>Domain Modal</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainCheckbox')}>
                    <react_native_1.Text style={style.text}>Domain Checkbox</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainRadio')}>
                    <react_native_1.Text style={style.text}>Domain Radio</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainSlider')}>
                    <react_native_1.Text style={style.text}>Domain Slider</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainHelperText')}>
                    <react_native_1.Text style={style.text}>Domain Helper Text</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainDropdownMenu')}>
                    <react_native_1.Text style={style.text}>Domain Dropdown Menu</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainHeader')}>
                    <react_native_1.Text style={style.text}>Domain Header</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainAlert')}>
                    <react_native_1.Text style={style.text}>Domain Alert</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainMultipleSelect')}>
                    <react_native_1.Text style={style.text}>Domain Multiple Select</react_native_1.Text>
                </react_native_1.TouchableOpacity>
            </react_native_1.View>
        </domaincomponent_1.DomainMainContainer>);
};
const style = react_native_1.StyleSheet.create({
    button: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        elevation: 10,
    },
    text: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
exports.default = Home;
