import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        textAlign: "center",
        paddingVertical: 15,
        paddingHorizontal: 80,
        color: "#FFF"
    },
    loginInput: {
        width: 285,
        height: 50,
        backgroundColor: "#FEFEFE",
        shadowColor: "rgba(117, 117, 117, 0.25)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 25,
        paddingLeft: 20,
        marginBottom: 20,
    },

    loginButton: {
        width: 170,
        height: 41,
        backgroundColor: "#6C63FF",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    addItemButton: {
        width: 120,
        height: 41,
        backgroundColor: "#6C63FF",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    listBox: {
        width: 200,
        height: 170,
        backgroundColor: "#FEFEFE",
        shadowColor: "rgba(117, 117, 117, 0.25)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 25,
        padding: 10,
        marginTop: 10
    },
    headerNewBox: {
        width: 277,
        height: 61,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 24,
        lineHeight: 42,
        marginTop: 0,
        textAlign: "center",
        marginBottom: 10,
    },
    titles: {
        left: 20,
        color: "#757575",
        lineHeight: 17,
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        marginBottom: 5,
    }

})