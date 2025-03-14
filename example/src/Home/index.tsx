import { DomainMainContainer } from "domaincomponent"
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import { useNavigation } from "@react-navigation/native"

const Home = () => {
    const navigation = useNavigation();
    return (
        <DomainMainContainer>
            <View>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainTextInput' as never)}>
                    <Text style={style.text}>TextInput</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainSelect' as never)}>
                    <Text style={style.text}>Select</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainLoading' as never)}>
                    <Text style={style.text}>Domain Loading</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainModal' as never)}>
                    <Text style={style.text}>Domain Modal</Text>
                </TouchableOpacity>
            </View>
        </DomainMainContainer>
    )
}

const style = StyleSheet.create({
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
})

export default Home;