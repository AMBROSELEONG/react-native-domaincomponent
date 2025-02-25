import { StyleSheet } from "react-native";

export const TextInputCSS = StyleSheet.create({
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
      }
});
