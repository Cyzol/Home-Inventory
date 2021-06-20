import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    userNameSection:{
        flex: 0.6,
        justifyContent: "flex-end"
    },
    headerUserName: {
        width: 277,
        height: 61,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 24,
        lineHeight: 42,
    },
    imageSection:{
        flex: 1.5,
    },
    buttonSection:{
        flex: 2,
        paddingTop: 30
    },
    mainMenuButton:{
        backgroundColor: "#6C63FF",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: -1,
            height: 8,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4,
        elevation: 6,
        borderRadius: 25,
        marginBottom: 30,
    },
    buttonText: {
        textAlign: "center",
        paddingVertical: 15,
        paddingHorizontal: 80,
        color: "#FFF"
    }
})