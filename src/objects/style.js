"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleSelectCSS = exports.AlertCSS = exports.HeaderCSS = exports.DropdownMenuCSS = exports.HelperTextCSS = exports.SliderCSS = exports.RadioButtonCSS = exports.CheckboxCSS = exports.ModalCSS = exports.MainContainer = exports.SelectCSS = exports.ActivityIndicatorCSS = exports.TextInputCSS = void 0;
const react_native_1 = require("react-native");
exports.TextInputCSS = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 8,
        paddingHorizontal: 10,
        width: '100%',
        height: 50,
    },
    labelView: {
        marginLeft: 10,
        position: 'absolute',
        backgroundColor: '#fff',
        top: -10,
        zIndex: 1,
        paddingHorizontal: 5,
    },
    label: {
        fontSize: 14,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
    helperText: {
        marginLeft: 10,
        fontSize: 14,
    },
});
exports.ActivityIndicatorCSS = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: react_native_1.Dimensions.get('screen').height * 0.5,
    },
});
exports.SelectCSS = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 8,
        height: 50,
    },
    labelView: {
        marginLeft: 10,
        position: 'absolute',
        backgroundColor: '#fff',
        top: -10,
        zIndex: 1,
        paddingHorizontal: 5,
    },
    label: {
        fontSize: 14,
    },
    selectWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    selector: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
    },
    selectedText: {
        fontSize: 16,
        alignSelf: 'center',
    },
    resetButton: {
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#ff4d4d',
        borderRadius: 5,
    },
    resetButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        maxHeight: react_native_1.Dimensions.get('screen').height / 2,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '5%',
    },
    searchContainer: {
        width: '100%',
        height: '10%',
        marginBottom: '10%'
    },
    searchInput: {
        borderWidth: 1,
        maxHeight: 40,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    selectedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    sideContainer: {
        minWidth: 30,
        alignItems: 'center',
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'left',
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ff4d4d',
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    helperText: {
        marginLeft: 10,
        fontSize: 14,
    },
});
exports.MainContainer = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
});
exports.ModalCSS = react_native_1.StyleSheet.create({
    backdrop: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    closeButton: {
        position: 'absolute',
        right: 15,
        top: 15,
        zIndex: 10,
    },
    closeText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        marginTop: 10,
    },
});
exports.CheckboxCSS = react_native_1.StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
});
exports.RadioButtonCSS = react_native_1.StyleSheet.create({
    radio: {
        borderWidth: 2,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    radioInner: {
        borderRadius: 50,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        marginHorizontal: 5,
    },
    optionText: {
        marginLeft: 10,
        fontSize: 16,
        color: "#000",
    },
});
exports.SliderCSS = react_native_1.StyleSheet.create({
    container: {
        padding: 20
    },
    track: {
        width: 300,
        height: 4,
        backgroundColor: '#ddd',
        borderRadius: 2,
        marginTop: 10
    },
    thumb: {
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        top: -8
    },
});
exports.HelperTextCSS = react_native_1.StyleSheet.create({
    container: {
        marginTop: 5,
    },
    text: {
        fontSize: 14,
    },
});
exports.DropdownMenuCSS = react_native_1.StyleSheet.create({
    button: {
        width: 200,
        padding: 12,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    text: {
        fontSize: 16
    },
    dropdown: {
        width: 200,
        marginTop: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        maxHeight: 150,
        elevation: 3,
        position: 'absolute',
        top: '100%',
        left: 0,
        zIndex: 100
    },
    option: {
        padding: 12
    },
    optionText: {
        fontSize: 16
    },
});
exports.HeaderCSS = react_native_1.StyleSheet.create({
    mainContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    headerView: {
        height: react_native_1.Dimensions.get("screen").width / 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    headerIcon: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
});
exports.AlertCSS = react_native_1.StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: "20%",
        right: "20%",
        zIndex: 10,
        padding: 20,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
    content: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginRight: 10,
        color: '#fff',
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#fff'
    },
});
exports.MultipleSelectCSS = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 8,
        height: 50,
    },
    labelView: {
        marginLeft: 10,
        position: 'absolute',
        backgroundColor: '#fff',
        top: -10,
        zIndex: 1,
        paddingHorizontal: 5,
    },
    label: {
        fontSize: 14,
    },
    selectWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    selector: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
    },
    selectedText: {
        fontSize: 16,
        alignSelf: 'center',
    },
    resetButton: {
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#ff4d4d',
        borderRadius: 5,
    },
    resetButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        maxHeight: react_native_1.Dimensions.get('screen').height / 2,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '5%',
    },
    searchContainer: {
        width: '100%',
        height: '10%',
        marginBottom: '10%'
    },
    searchInput: {
        borderWidth: 1,
        maxHeight: 40,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    selectedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    sideContainer: {
        minWidth: 30,
        alignItems: 'center',
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'left',
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ff4d4d',
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    helperText: {
        marginLeft: 10,
        fontSize: 14,
    },
});
