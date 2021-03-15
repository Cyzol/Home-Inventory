import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    margin: 10,
  },
  titles: {
    left: 20,
    color: "#757575",
    lineHeight: 17,
    fontSize: 14,
    //  fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    marginBottom: 5,
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
  },
  loginButton: {
    width: 170,
    height: 41,
    backgroundColor: "#6C63FF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  loginText: {
    // fontFamily: "Roboto",
    color: "#FFFFFF",
    lineHeight: 16,
    fontSize: 14,
    //  fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  signUpButton: {
    // fontFamily: "Roboto",
    color: "#757575",
    lineHeight: 16,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    marginTop: 30,
  },
  loginIcon: {
    width: 248,
    height: 188,
    marginBottom: 30,
  },
  header: {
    color: "#514D4D",
    lineHeight: 42,
    fontSize: 36,
    fontStyle: "normal",
    fontWeight: "normal",
    marginTop: -20,
    marginBottom: 20,
  },
});