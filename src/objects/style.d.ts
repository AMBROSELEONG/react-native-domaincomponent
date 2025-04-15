export declare const TextInputCSS: {
    container: {
        flexDirection: "row";
        alignItems: "center";
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
        paddingHorizontal: number;
        width: "100%";
        height: number;
    };
    labelView: {
        marginLeft: number;
        position: "absolute";
        backgroundColor: string;
        top: number;
        zIndex: number;
        paddingHorizontal: number;
    };
    label: {
        fontSize: number;
    };
    input: {
        flex: number;
        height: number;
        fontSize: number;
    };
    helperText: {
        marginLeft: number;
        fontSize: number;
    };
};
export declare const ActivityIndicatorCSS: {
    container: {
        flex: number;
        justifyContent: "center";
        alignItems: "center";
        height: number;
    };
};
export declare const SelectCSS: {
    container: {
        width: "100%";
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
        height: number;
    };
    labelView: {
        marginLeft: number;
        position: "absolute";
        backgroundColor: string;
        top: number;
        zIndex: number;
        paddingHorizontal: number;
    };
    label: {
        fontSize: number;
    };
    selectWrapper: {
        flexDirection: "row";
        alignItems: "center";
        flex: number;
    };
    selector: {
        flex: number;
        flexDirection: "row";
        paddingLeft: number;
    };
    selectedText: {
        fontSize: number;
        alignSelf: "center";
    };
    resetButton: {
        marginRight: number;
        paddingVertical: number;
        paddingHorizontal: number;
        backgroundColor: string;
        borderRadius: number;
    };
    resetButtonText: {
        color: string;
        fontWeight: "bold";
    };
    modalContainer: {
        flex: number;
        justifyContent: "center";
        alignItems: "center";
        backgroundColor: string;
    };
    modalContent: {
        width: "80%";
        backgroundColor: string;
        borderRadius: number;
        padding: number;
        maxHeight: number;
    };
    title: {
        fontSize: number;
        textAlign: "center";
        fontWeight: "bold";
        marginBottom: "5%";
    };
    searchContainer: {
        width: "100%";
        height: "10%";
        marginBottom: "10%";
    };
    searchInput: {
        borderWidth: number;
        maxHeight: number;
    };
    option: {
        flexDirection: "row";
        alignItems: "center";
        paddingVertical: number;
    };
    selectedContainer: {
        flexDirection: "row";
        alignItems: "center";
        flex: number;
    };
    sideContainer: {
        minWidth: number;
        alignItems: "center";
    };
    optionText: {
        flex: number;
        fontSize: number;
        textAlign: "left";
    };
    closeButton: {
        marginTop: number;
        padding: number;
        backgroundColor: string;
        borderRadius: number;
        alignItems: "center";
    };
    closeButtonText: {
        color: string;
        fontWeight: "bold";
    };
    helperText: {
        marginLeft: number;
        fontSize: number;
    };
};
export declare const MainContainer: {
    container: {
        flex: number;
        paddingTop: number;
    };
};
export declare const ModalCSS: {
    backdrop: {
        flex: number;
        alignItems: "center";
        justifyContent: "center";
    };
    modalContainer: {
        backgroundColor: string;
        borderRadius: number;
        padding: number;
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
    closeButton: {
        position: "absolute";
        right: number;
        top: number;
        zIndex: number;
    };
    closeText: {
        fontSize: number;
        fontWeight: "bold";
        color: string;
    };
    title: {
        fontSize: number;
        fontWeight: "bold";
        marginBottom: number;
    };
    content: {
        marginTop: number;
    };
};
export declare const CheckboxCSS: {
    container: {
        borderWidth: number;
        borderRadius: number;
        justifyContent: "center";
        alignItems: "center";
    };
};
export declare const RadioButtonCSS: {
    radio: {
        borderWidth: number;
        borderRadius: number;
        justifyContent: "center";
        alignItems: "center";
    };
    radioInner: {
        borderRadius: number;
    };
    option: {
        flexDirection: "row";
        alignItems: "center";
        marginVertical: number;
        marginHorizontal: number;
    };
    optionText: {
        marginLeft: number;
        fontSize: number;
        color: string;
    };
};
export declare const SliderCSS: {
    container: {
        padding: number;
    };
    track: {
        width: number;
        height: number;
        backgroundColor: string;
        borderRadius: number;
        marginTop: number;
    };
    thumb: {
        width: number;
        height: number;
        borderRadius: number;
        position: "absolute";
        top: number;
    };
};
export declare const HelperTextCSS: {
    container: {
        marginTop: number;
    };
    text: {
        fontSize: number;
    };
};
export declare const DropdownMenuCSS: {
    button: {
        width: number;
        padding: number;
        backgroundColor: string;
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
    };
    text: {
        fontSize: number;
    };
    dropdown: {
        width: number;
        marginTop: number;
        backgroundColor: string;
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
        maxHeight: number;
        elevation: number;
        position: "absolute";
        top: "100%";
        left: number;
        zIndex: number;
    };
    option: {
        padding: number;
    };
    optionText: {
        fontSize: number;
    };
};
export declare const HeaderCSS: {
    mainContainer: {
        width: "100%";
        flexDirection: "row";
        alignItems: "center";
        paddingVertical: number;
        paddingHorizontal: number;
    };
    headerView: {
        height: number;
        flexDirection: "row";
        alignItems: "center";
        paddingHorizontal: number;
    };
    headerIcon: {
        width: number;
        justifyContent: "center";
        alignItems: "center";
    };
    pageName: {
        color: string;
        fontSize: number;
        fontWeight: "bold";
        textAlign: "center";
        flex: number;
    };
};
export declare const AlertCSS: {
    container: {
        position: "absolute";
        top: number;
        left: "20%";
        right: "20%";
        zIndex: number;
        padding: number;
        borderRadius: number;
        flexDirection: "row";
        alignItems: "center";
        justifyContent: "center";
        borderWidth: number;
    };
    content: {
        flexDirection: "row";
        alignItems: "center";
    };
    icon: {
        marginRight: number;
        color: string;
    };
    text: {
        fontSize: number;
        fontWeight: "bold";
        color: string;
    };
};
export declare const MultipleSelectCSS: {
    container: {
        width: "100%";
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
        height: number;
    };
    labelView: {
        marginLeft: number;
        position: "absolute";
        backgroundColor: string;
        top: number;
        zIndex: number;
        paddingHorizontal: number;
    };
    label: {
        fontSize: number;
    };
    selectWrapper: {
        flexDirection: "row";
        alignItems: "center";
        flex: number;
    };
    selector: {
        flex: number;
        flexDirection: "row";
        paddingLeft: number;
    };
    selectedText: {
        fontSize: number;
        alignSelf: "center";
    };
    resetButton: {
        marginRight: number;
        paddingVertical: number;
        paddingHorizontal: number;
        backgroundColor: string;
        borderRadius: number;
    };
    resetButtonText: {
        color: string;
        fontWeight: "bold";
    };
    modalContainer: {
        flex: number;
        justifyContent: "center";
        alignItems: "center";
        backgroundColor: string;
    };
    modalContent: {
        width: "80%";
        backgroundColor: string;
        borderRadius: number;
        padding: number;
        maxHeight: number;
    };
    title: {
        fontSize: number;
        textAlign: "center";
        fontWeight: "bold";
        marginBottom: "5%";
    };
    searchContainer: {
        width: "100%";
        height: "10%";
        marginBottom: "10%";
    };
    searchInput: {
        borderWidth: number;
        maxHeight: number;
    };
    option: {
        flexDirection: "row";
        alignItems: "center";
        paddingVertical: number;
    };
    selectedContainer: {
        flexDirection: "row";
        alignItems: "center";
        flex: number;
    };
    sideContainer: {
        minWidth: number;
        alignItems: "center";
    };
    optionText: {
        flex: number;
        fontSize: number;
        textAlign: "left";
    };
    closeButton: {
        marginTop: number;
        padding: number;
        backgroundColor: string;
        borderRadius: number;
        alignItems: "center";
    };
    closeButtonText: {
        color: string;
        fontWeight: "bold";
    };
    helperText: {
        marginLeft: number;
        fontSize: number;
    };
};
