import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    containerTitle: {
        flex: 0.2,
        right: 40,
    },
    titles: {
        left: 20,
        color: "#757575",
        lineHeight: 17,
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        marginBottom: 5,
    },
    place: {
        flex: 1,
        width: 245,
        height: 35,
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
        justifyContent: 'center'

    },
    loginButton: {
        width: 100,
        height: 41,
        backgroundColor: "#6C63FF",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    scrollView: {
        flex: 0.5,
        width: 245,
    },
    item: {
        width: 245,
        height: 35,
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

    text: {
        fontSize: 16,
    }
})