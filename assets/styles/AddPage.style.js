import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 80,
    color: "#FFF",
  },
  buttons: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "center",
  },
  loginInput: {
    width: 255,
    padding: 5,
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
    marginTop: 20,
    width: 100,
    height: 41,
    backgroundColor: "#6C63FF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  addItemButton: {
    marginTop: 20,
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
    marginTop: 50,
  },
  item: {
    padding: 5,
    textAlign: "center",
  },
  itemText: {
    textTransform: "uppercase",
    color: "black",
    textAlign: "center",
  },
  headerNewBox: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
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
  },
  keyboard: {
    margin: 100,
  },
  scrollView: {
    flex: 1,
  },
});
